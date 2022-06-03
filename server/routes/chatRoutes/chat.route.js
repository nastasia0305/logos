const router = require('express').Router();

const { Op } = require('sequelize');
const { Request } = require('../../db/models');

router.get('/allchats', async (req, res) => {
  let allRequests;
  if (req.session.user.isLawyer) {
    allRequests = await Request.findAll({ where: { lawyer_id: req.session.user.id } });
  } else {
    allRequests = await Request.findAll({ where: { client_id: req.session.user.id, lawyer_id: { [Op.not]: null } } });
  }
  res.status(200).json(allRequests);
});

router.get('/allOrders', async (req, res) => {
  const allOrders = await Request.findAll();
  console.log(allOrders);
  res.status(200).json(allOrders);
});

module.exports = router;
