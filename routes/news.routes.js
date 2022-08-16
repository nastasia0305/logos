const router = require('express').Router();

const { News } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const newsResponse = await News.findAll({ where: { isActive: true }, order: [['updatedAt', 'DESC']] });
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
