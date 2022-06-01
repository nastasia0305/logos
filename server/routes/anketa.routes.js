const router = require('express').Router();
const { Request } = require('../db/models');

router
  .post('/anketa', async (req, res) => {
    const {
      statusClient, help, cases, service, id,
    } = req.body;

    await Request.create({
      client_id: id,
      statusClient,
      help,
      case: cases,
      service,
    });
    // const one = await Request.findAll();
    // console.log('🚀 ~ .post ~ one', one);
    res.status(200).json({ message: 'Ваша заявка отправлена к нашим юристам. Ожидайте ответа специалиста.' });
  })
  .get('/request', async (req, res) => {
    const allRequest = await Request.findAll();
    console.log('🚀 ~ .get ~ allRequest', allRequest);
    res.status(200).json(allRequest);
  });
module.exports = router;
