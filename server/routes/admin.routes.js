const router = require('express').Router();

const { Op } = require('sequelize');

const { Lawyer } = require('../db/models');
const { News } = require('../db/models');
const { Request } = require('../db/models');
const { StatusAnket } = require('../db/models');

router.get('/lawyers', async (req, res) => {
  const { user } = req.session;

  if (!user.isAdmin) {
    res.status(404);
  }

  try {
    const lawyersResponse = await Lawyer.findAll({ where: { isValidate: { [Op.not]: true } }, order: [['updatedAt', 'DESC']] });
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

    const lawyerResponse = await Lawyer.update({ isValidate: true }, { where: { id } });
    const isUpdated = lawyerResponse.length > 0;
    const updatedLawyer = await Lawyer.findOne({ where: { id } });
    const result = typeof updatedLawyer.get === 'function' ? updatedLawyer.get() : updatedLawyer;

    res.status(isUpdated ? 200 : 400).json(result);
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
    const newsResponse = await News.findAll({ order: [['updatedAt', 'DESC']] });
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

router.put('/news', async (req, res) => {
  const { user } = req.session;

  if (!user.isAdmin) {
    res.status(404);
  }

  try {
    const {
      id, title, text, isActive,
    } = req.body;

    const newsResponse = await News.update({ title, text, isActive }, { where: { id } });
    const result = newsResponse.length > 0;

    res.status(result ? 200 : 400).json(result);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.post('/news', async (req, res) => {
  const { user } = req.session;

  if (!user.isAdmin) {
    res.status(404);
  }

  try {
    const { title, text } = req.body;

    const newsResponse = await News.create({ title, text });

    let result = false;
    if (newsResponse && newsResponse.get && typeof newsResponse.get === 'function') {
      result = newsResponse.get();
    }

    res.status(result ? 200 : 400).json(result);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.post('/news/activation', async (req, res) => {
  const { user } = req.session;

  if (!user.isAdmin) {
    res.status(404);
  }

  try {
    const { id, isActive } = req.body;

    const newsResponse = await News.update({ isActive }, { where: { id } });
    const isUpdated = newsResponse.length > 0;
    const updatedNews = await News.findOne({ where: { id } });
    const result = typeof updatedNews.get === 'function' ? updatedNews.get() : updatedNews;

    res.status(isUpdated ? 200 : 400).json(result);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.delete('/news', async (req, res) => {
  const { user } = req.session;

  if (!user.isAdmin) {
    res.status(404);
  }

  try {
    const { id } = req.body;

    const newsResponse = await News.destroy({ where: { id } });
    const result = newsResponse > 0;

    res.status(result ? 200 : 400).json(result);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.delete('/deleteOrder/:id', async (req, res) => {
  const { id } = req.params;
  const deletedStatusAnket = await StatusAnket.destroy({ where: { anketa_id: id } });
  const deletedOrder = await Request.destroy({ where: { id } });
  res.status(200).json(id);
});

module.exports = router;
