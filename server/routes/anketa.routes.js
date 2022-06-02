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

    res.status(200).json({ message: 'Ваша заявка отправлена к нашим юристам. Ожидайте ответа специалиста.' });
  })
  .get('/request/own', async (req, res) => {
    const { id } = req.session.user;
    console.log('🚀 ~ .get ~ id', id);

    const ownLawyerRequest = await Request.findAll({
      where: {
        lawyer_id: id,
      },
    });
    res.status(200).json(ownLawyerRequest);
    console.log('🚀 ~ .get ~ ownLawyerReauest', ownLawyerRequest);
  })
  .get('/request/:id', async (req, res) => {
    const { id } = req.params;
    const allAnket = await Request.findAll({
      where: {
        condition: 'new',
      },
      raw: true,
    });
    const allStatusAnket = await StatusAnket.findAll({
      where: {
        lawyer_id: id,
        status: 'decline',
      },
    });

    const dontShowRequest = allStatusAnket.map((elem) => elem.anketa_id);

    const result = allAnket.filter((elem) => !dontShowRequest.includes(elem.id));
    console.log('🚀 ~ .get ~ result', result);

    res.status(200).json(result);
  })

  // Decline
  .put('/lawyer_id/:lawyer_id/:id', async (req, res) => {
    // eslint-disable-next-line camelcase
    const { lawyer_id, id } = req.params;

    await StatusAnket.create({
      // eslint-disable-next-line camelcase
      anketa_id: id,
      lawyer_id,
      status: 'decline',
    });
  })

  // Accept
  .get('/lawyer_id/:lawyer_id/:id', async (req, res) => {
    const { lawyer_id, id } = req.params;
    await StatusAnket.create({
      // eslint-disable-next-line camelcase
      anketa_id: id,
      lawyer_id,
      status: 'accept',
    });
  })
  .put('/update/request/lawyer_id/:lawyer_id/:id', async (req, res) => {
    const { lawyer_id, id } = req.params;
    await Request.update({
      lawyer_id,
    }, { where: { id } });
  });
module.exports = router;
