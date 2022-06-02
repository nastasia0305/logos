const router = require('express').Router();
const { Lawyer } = require('../../db/models');
const { Client } = require('../../db/models');

router.put('/', async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      fathersname,
      email,
      city,
    } = req.body;

    const currentUserEmail = req.session.user.email;
    const hasLawyer = await Lawyer.findOne({ where: { email: currentUserEmail } });
    const hasClient = await Client.findOne({ where: { email: currentUserEmail } });
    console.log('====>', hasLawyer);
    if (hasLawyer) {
      await Lawyer.update({
        firstname, lastname, fathersname, email, city,
      }, { where: { email: currentUserEmail } });

      const updatedLawyer = await Lawyer.findOne({ where: { email } });
      req.session.user = updatedLawyer;
      console.log('console=====>', updatedLawyer);
      res.status(200).json({ message: 'Данные успешно изменены.', user: updatedLawyer });
    } else {
      await Client.update({
        firstname, lastname, fathersname, email, city,
      }, { where: { email: currentUserEmail } });
      const updatedClient = await Client.findOne({ where: { email } });

      req.session.user = updatedClient;
      res.status(200).json({ message: 'Данные успешно изменены.', user: updatedClient });
    }
  } catch (error) {
    res.status(401).json({ message: 'Ошибка при изменении' });
  }
});

module.exports = router;
