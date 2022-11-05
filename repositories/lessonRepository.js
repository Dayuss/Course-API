const {
    Lesson,
    Section,
    Sequelize
} = require('../models');


const create = async(data, t) => {
    return Lesson.create(data,{transaction: t}).catch((error) => { throw new Error(error) })
}

const getMax = async (whr) => {
    return Lesson.max('seq', {where : whr})
}

const detail = async(whr) => {
	return Lesson.findOne({
		where : whr,
	});
}

const listAll = (whr = null) => {
    return Lesson.findAll({
        where: whr,
        order:[ 
            ['seq','ASC']
        ],
    })
}

const update = async(id, data, t) => {
    return Lesson.update(data, 
    {
        where: {lessonId: id},
        transaction: t,
        returning: true,
        plain: true
    })
    .catch((error) => { throw new Error(error) })
    .then(data => {
        return data[1] 
    })
}


const destroy = async(whr, t) => {
    return Lesson.destroy({
        where: whr,
        transaction: t,
        returning: true,
        plain: true
    })
    .catch((error) => { throw new Error(error) })
    .then(data => {
        return data[1] 
    })
}


module.exports = {
    create,
    detail,
    update,
    listAll,
    destroy,
    getMax
}