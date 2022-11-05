const {
    Lesson,
    Section,
    Sequelize
} = require('../models');


const create = async(data, t) => {
    return Section.create(data, {
        transaction: t
    }).catch((error) => {
        throw new Error(error)
    })
}
const detail = async(whr) => {
	return Section.findOne({
		where : whr,
	});
}

const getMax = async (whr) => {
    return Section.max('seq', {where : whr})
}

const listAll = (whr = null) => {
    return Section.findAll({
        where: whr,
        include: [{
            model: Lesson,
            as: 'children',
            order: [
                ['seq', 'ASC']
            ],
        }],
        order:[ 
            ['seq','ASC']
        ],
    })
}

const update = async(id, data, t) => {
    return Section.update(data, 
    {
        where: {sectionId: id},
        transaction: t,
        returning: true,
        plain: true
    })
    .catch((error) => { throw new Error(error) })
    .then(data => {
        return data[1] 
    })
}


const destroy = async(id, t) => {
    return Section.destroy({
        where: {sectionId: id},
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
    getMax,
    update,
    listAll,
    destroy
}