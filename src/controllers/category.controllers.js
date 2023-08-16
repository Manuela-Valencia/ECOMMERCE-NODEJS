const catchError = require('../utils/catchError');
const category = require('../models/Category');

const getAll = catchError(async(req, res) => {
    const results = await category.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await category.create(req.body);
    return res.status(201).json(result);
});


const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await category.destroy({ where: {id} });
    if(!result) return res.sendStatus(400);
    return res.sendStatus(204);
});



module.exports = {
    getAll,
    create,
    remove,

}