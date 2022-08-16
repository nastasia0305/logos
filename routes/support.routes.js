const router = require('express').Router();

const { Support } = require('../db/models');

router.post('/support', async (req, res) => {

  const { question, description, id } = req.body;
  const { isLawyer } = req.session.user;

  if (isLawyer) {
    await Support.create({
      question,
      description,
      lawyer_id: id,
    });

    res
      .status(200)
      .json({
        message:
          'Ваша заявка передана в службу поддержки. Наши специалисты свяжутся с вами в ближайшее время.',
      });
  } else {
    await Support.create({
      question,
      description,
      client_id: id,
    });

    res.status(200).json({ message: 'Ваша заявка передана в службу поддержки. Наши специалисты свяжутся с вами в ближайшее время.' });
  }
});

router.get('/supports', async(req, res) => {
  const getAllRequests = await Support.findAll()
  console.log(getAllRequests);
  res.status(200).json(getAllRequests)
})

router.put('/changestatus/:id', async (req, res) => {
  const { id } = req.params
  const changedStatus = await Support.update( { status: 'Выполнена' }, { where: { id } } )
  res.status(200).json(id)
})

router.delete('/deletesupport/:id', async (req, res) => {
  const { id } = req.params
  const deletedSupport = await Support.destroy({ where: { id } })
  console.log(id);
  res.status(200).json(id)
})

module.exports = router;
