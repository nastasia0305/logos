const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Client } = require('../../db/models');
const { Lawyer } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const client = await Client.findOne({ where: { email } });
    const lawyer = await Lawyer.findOne({ where: { email } });

    if (client) {
      const isPassValide = await bcrypt.compare(password, client.password);

      if (isPassValide) {
        req.session.user = client;
        req.session.isLawyer = false;
        res.status(201).json({
          message: 'Вы вошли в аккаунт',
          client,
        });
      } else {
        res.status(401).json({
          message: 'Некорректные данные',
        });
      }
    } else if (lawyer) {
      const isPassValide2 = await bcrypt.compare(password, lawyer.password);

      if (isPassValide2) {
        req.session.user = lawyer;
        req.session.isLawyer = true;
        res.status(201).json({
          message: 'Вы вошли в аккаунт',
          lawyer,
        });
      } else {
        res.status(401).json({
          message: 'Некорректные данные',
        });
      }
    } else {
      res.status(404).json({
        message: 'Такого пользователя не существует',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Ошибка входа',
    });
  }
});

module.exports = router;
