const router = require('express').Router();

const { Op } = require('sequelize');

const { Lawyer } = require('../db/models');
const { News } = require('../db/models');

router.get('/lawyers', async (req, res) => {
  const { user } = req.session;

  if (!user.isAdmin) {
    res.status(404);
  }

  try {
    const lawyersResponse = await Lawyer.findAll({ where: { isValidate: { [Op.not]: true } } });
    const result = await Promise.all(lawyersResponse.map((lawyer) => {
      if (lawyer.get && typeof lawyer.get === 'function') {
        return lawyer.get();
      }
      return lawyer;
    }));

    res.status(200).json(result || []);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.put('/lawyers', async (req, res) => {
  const { user } = req.session;

  if (!user.isAdmin) {
    res.status(404);
  }

  try {
    const { id } = req.body;
    const lawyersResponse = await Lawyer.update({ isValidate: true }, { where: { id } });
    const result = lawyersResponse.length > 0;

    res.status(result ? 200 : 400).json(result);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});


router.get('/news', async (req, res) => {
  const { user } = req.session;

  if (!user.isAdmin) {
    res.status(404);
  }

  try {
    const newsResponse = await News.findAll();
    const result = await Promise.all(newsResponse.map((item) => {
      if (item.get && typeof item.get === 'function') {
        return item.get();
      }
      return item;
    }));

    res.status(200).json(result || []);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = router;
