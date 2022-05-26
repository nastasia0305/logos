const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.destroy();
  res.json({
    message: 'Вы вышли из аккаунта'
  });
})

// res.clearCookie(req.app.get('session cookie name')); ?? Удаление кук, надо проверить.
 


module.exports = router;