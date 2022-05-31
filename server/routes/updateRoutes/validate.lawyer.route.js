const router = require('express').Router()
const { Lawyer } = require('../../db/models')

router.put('/', async (req, res) => {
  const {
    help, cases, service, education, experience, diploma, certificate, employeBook
  } = req.body
console.log(req.body);

// const currentLawyer = await Lawyer.findOne({ where: { id: req.session.user.id } })
// console.log(currentLawyer);
await Lawyer.update({
  help, case: cases, service, educationLevel: education, experience, diploma, certificate, employeBook
}, { where: { id: req.session.user.id } });


})

module.exports = router