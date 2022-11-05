const route = require('express').Router();
const courseService = require('../services/courseService');

route.get('/section', 
    async (req, res, next) => {
    try{
        let data = await courseService.getList();
        return res.status(200).json({
            status: 0,
            ... data,
        });
    }catch(e){
        next(e)
    }
});

route.post('/section',
    async (req, res, next) => {
    try{
        let data = await courseService.addSection(req.body);
        return res.status(200).json({
            status: 0,
            ... data,
        });
    }catch(e){
        next(e)
    }
});

route.post('/lesson',
    async (req, res, next) => {
        try {
            let data = await courseService.addLesson(req.body);
            return res.status(200).json({
                status: 0,
                ...data,
            });
        } catch (e) {
            next(e)
        }
    });

route.put('/section',
    async (req, res, next) => {
        try {
            let data = await courseService.updateSection(req.body);
            return res.status(200).json({
                status: 0,
                ...data,
            });
        } catch (e) {
            next(e)
        }
    });
route.put('/section/:id',
    async (req, res, next) => {
        try {
            let data = await courseService.updateSectionData(req.params.id,req.body);
            return res.status(200).json({
                status: 0,
                ...data,
            });
        } catch (e) {
            next(e)
        }
    });

route.put('/lesson',
    async (req, res, next) => {
        try {
            let data = await courseService.updateLesson(req.body);
            return res.status(200).json({
                status: 0,
                ...data,
            });
        } catch (e) {
            next(e)
        }
    });
route.delete('/section/:id',
    async (req, res, next) => {
        try {
            let data = await courseService.deleteSection(req.params.id);
            return res.status(200).json({
                status: 0,
                ...data,
            });
        } catch (e) {
            next(e)
        }
    });

route.delete('/lesson/:id',
    async (req, res, next) => {
        try {
            let data = await courseService.deleteLesson(req.params.id);
            return res.status(200).json({
                status: 0,
                ...data,
            });
        } catch (e) {
            next(e)
        }
    });




module.exports = route;
