const router = require('express').Router();
const { Anketa } = require('../db/models');

router
  .post('/anketa', async (req, res) => {
    const {
      statusClient, help, cases, service, id,
    } = req.body;
    console.log('🚀 ~ .post ~ id', id);
    await Anketa.create({
      statusClient,
      help,
      case: cases,
      service,
      client_id: id,

    });
    res.status(200).json({ message: 'Ваша заявка отправлена к нашим юристам. Ожидайте ответа специалиста.' });
  });
module.exports = router;
