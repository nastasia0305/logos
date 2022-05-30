const router = require('express').Router();
const { Support } = require('../db/models');

router
  .post('/', async (req, res) => {
    const {
      question, description, id,
    } = req.body;
    const newSupport = await Support.create({
      question,
      description,
      client_id: id,
    });
    res.status(200).json({ message: 'Ваша заявка передана в службу поддержки. Наши специалисты свяжутся с вами в ближайшее время.' });
  });

module.exports = router;