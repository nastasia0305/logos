const router = require('express').Router();
const bcrypt = require('bcrypt');

const { Client } = require('../../db/models');
const { Lawyer } = require('../../db/models');

const saltRounds = 10;

router.post('/', async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      fathersname,
      email,
      password,
      city,
      select, // ?? Выбор роли, Юрист либо Клиент
    } = req.body;

    const hashPassword = await bcrypt.hash(password, saltRounds);

    // Здесь можно не очищать данные, ответ может быть либо null либо нет
    // достаточно привести его к булевому в if
    const hasClient = await Client.findOne({ where: { email } });
    const hasLawyer = await Lawyer.findOne({ where: { email } });

    if (password.length < 8) {
      res.status(400).json({ message: 'Пароль должен содержать не менее 8 символов' });
    } else if (!hasClient && !hasLawyer && password >= 8) {
      switch (select) {
        case 'lawyer': {
          const lawyerResponse = await Lawyer.create({
            firstname,
            lastname,
            fathersname,
            email,
            password: hashPassword,
            city,
          });

          let lawyer;

          // Достаём чистые данные из полученного ответа метода create
          // с помощью встроенного метода get от модели таблицы
          if (lawyerResponse && lawyerResponse.get && typeof lawyerResponse.get === 'function') {
            lawyer = lawyerResponse.get();
          }

          req.session.user = { ...lawyer, isLawyer: true };
          res.status(201).json({ message: 'Пользователь успешно зарегистрирован', user: lawyer });

          break;
        }
        case 'client':
        default: {
          const clientResponse = await Client.create({
            firstname,
            lastname,
            fathersname,
            email,
            password: hashPassword,
            city,
          });

          let client;

          // Достаём чистые данные из полученного ответа метода create
          // с помощью встроенного метода get от модели таблицы
          if (clientResponse && clientResponse.get && typeof clientResponse.get === 'function') {
            client = clientResponse.get();
          }

          req.session.user = { ...client, isLawyer: false };
          res.status(201).json({ message: 'Пользователь успешно зарегистрирован', user: client });

          break;
        }
      }
    } else {
      res.status(400).json({ message: 'Пользователь с таким email уже зарегистрирован' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Ошибка при регистрации' });
  }
});

module.exports = router;
