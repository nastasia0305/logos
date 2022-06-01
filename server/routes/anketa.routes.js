const router = require('express').Router();
const { Request } = require('../db/models');
const { Client } = require('../db/models');
const { StatusAnket } = require('../db/models');

router
  .post('/anketa', async (req, res) => {
    const {
      statusClient, help, cases, service, id, firstname, lastname, fathersname,
    } = req.body;
    const fullName = `${lastname} ${firstname} ${fathersname}`;
    const newRequest = await Request.create({
      client_id: id,
      statusClient,
      help,
      case: cases,
      service,
      clientName: fullName,
    });
    console.log('🚀 ~ .post ~ newRequest', newRequest);
    await StatusAnket.create({
      anketa_id: newRequest.id,
    });
    // const one = await Request.findAll();
    // console.log('🚀 ~ .post ~ one', one);
    res.status(200).json({ message: 'Ваша заявка отправлена к нашим юристам. Ожидайте ответа специалиста.' });
  })
  .get('/request', async (req, res) => {
    const allRequest = await Request.findAll();
    res.status(200).json(allRequest);
  })
  .put('/lawyer_id/:id', (req, res) => {
    // const { id } = req.body;
    // console.log('🚀 ~ .put ~ id', id);
    const idReq = req.params;
    console.log('🚀 ~ .put ~ idReq', idReq);
  });
module.exports = router;
