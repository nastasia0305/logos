const router = require('express').Router();

router.get('/', async (req, res) => {
  const { user } = req.session;

  // В сессии может отсутствовать нужный нам объект пользователя
  // например после деавторизации
  // а запросы с клиента на сессию идут даже после деавторизации
  if (user) {
    res.status(200).json(user);
  }
});

module.exports = router;
