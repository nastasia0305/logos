const router = require('express').Router();
const { Request } = require('../../db/models')

router.get('/allchats', async (req, res) => {
  const allClientRequests = await Request.findAll({ where: { client_id: req.session.user.id}})
  console.log(allClientRequests);
  res.status(200).json(allClientRequests)
})

router.get('/allOrders', async (req, res) => {
  const allOrders = await Request.findAll()
  console.log(allOrders);
  res.status(200).json(allOrders)
})

module.exports = router;
