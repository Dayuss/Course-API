const Lesson = require("../repositories/lessonRepository")
const Section = require("../repositories/sectionRepository")
const {sequelize} = require('../models');
const moment = require("moment");
const strRand = require("../helper/strRand");
const isEmpty = require("../helper/isEmpty");
const  { v4: uuidv4 }  = require('uuid');

const getList = async () => {
    const data = await Section.listAll();
    return{
        data,
        msg: "Success get lesson."
    }
}

const addSection = async (inputValues) => {
    const maxSeq = await Section.getMax();
    const data = await Section.create({
        sectionId: uuidv4(),
        title:inputValues.title,
        seq: maxSeq+1,
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    });
    return {
        data,
        msg: "Success get member."
    }
}

const addLesson = async (inputValues) => {
    const maxSeq = await Lesson.getMax({
        sectionId: inputValues.sectionId,
    });
    const data = await Lesson.create({
        lessonId: uuidv4(),
        sectionId: inputValues.sectionId,
        title:inputValues.title,
        lessonType: inputValues.lessonType,
        isRequired:inputValues.isRequired,
        isPreview: inputValues.isPreview,
        seq: maxSeq+1,
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    });
    return {
        data,
        msg: "Success get member."
    }
}

const updateSection = async (inputValues) => {
    for(let item of inputValues){
        await Section.update(item.sectionId,{
            seq: item.seq,
        });
    }
    return {
        data:inputValues,
        msg: "Success get member."
    }
}

const updateSectionData = async (sectionId,inputValues) => {
    await Section.update(sectionId, {
        title: inputValues.title
    });
    return {
        data: inputValues,
        msg: "Success get member."
    }
}

const updateLesson = async (inputValues) => {
    for (let i=0;i<inputValues.length; i++) {
        await Lesson.update(inputValues[i].lessonId, {
            seq: (+i)+1,
        });
    }
    return {
        data: inputValues,
        msg: "Success get member."
    }
}

const deleteSection = async (sectionId)=>{
    await Lesson.destroy({sectionId})
    return await Section.destroy(sectionId)
}

const deleteLesson = async (lessonId)=>{
    return Lesson.destroy({
        lessonId
    })
}
module.exports={
    getList,
    addSection,
    addLesson,
    updateSectionData,
    updateSection,
    updateLesson,
    deleteSection,
    deleteLesson
    
    // getListMember,
}