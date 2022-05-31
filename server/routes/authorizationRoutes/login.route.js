const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Client } = require('../../db/models');
const { Lawyer } = require('../../db/models');
const { Admin } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const clientResponse = await Client.findOne({ where: { email } });
    const lawyerResponse = await Lawyer.findOne({ where: { email } });
    const adminResponse = await Admin.findOne({ where: { email } });

    let client;
    let lawyer;
    let admin;

    // Достаём чистые данные из полученного ответа метода findOne
    // с помощью встроенного метода get от модели таблицы
    if (clientResponse && clientResponse.get && typeof clientResponse.get === 'function') {
      client = clientResponse.get();
    }
    if (lawyerResponse && lawyerResponse.get && typeof lawyerResponse.get === 'function') {
      lawyer = lawyerResponse.get();
    }
    if (adminResponse && adminResponse.get && typeof adminResponse.get === 'function') {
      admin = adminResponse.get();
    }

    if (client) {
      const passwordValidation = await bcrypt.compare(password, client.password);

      if (passwordValidation) {
        req.session.user = client;
        res.status(201).json({
          message: 'Вы вошли в аккаунт',
          user: req.session.user,
        });
      } else {
        res.status(401).json({
          message: 'Некорректные данные',
        });
      }
    } else if (lawyer) {
      const passwordValidation = await bcrypt.compare(password, lawyer.password);

      if (passwordValidation) {
        req.session.user = lawyer;

        res.status(201).json({
          message: 'Вы вошли в аккаунт',
          user: req.session.user,
        });
      } else {
        res.status(401).json({
          message: 'Некорректные данные',
        });
      }
    } else if (admin) {
      req.session.user = admin;

      res.status(201).json({
        message: 'Вы вошли в аккаунт Администратора',
        user: req.session.user,
      });
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
