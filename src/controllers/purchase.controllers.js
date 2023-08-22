const catchError = require('../utils/catchError');
const Purchase = require('../models/Purchase');
const Cart = require('../models/Cart');
const { where } = require('sequelize');

const getAll = catchError(async(req, res) => {
    const userId = req.user.userId
    const result = await Purchase.findAll({where : { userId}})
    return res.json(/* valor a retornar */)
});

const create = catchError(async (req, res) => {
    const userId = req.user.id
  
    const cart = await Cart.findAll({
      where: { userId },
      raw: true,
      attributes: ['quantity', 'userId', 'productId']
    })
  
    const result = await Purchase.bulkCreate(cart)
    if (!result) res.sendStatus(404)
  
    await Cart.destroy({ where: { userId } })
  
    return res.status(201).json(result)
  })

module.exports = {
    getAll,
    create
}