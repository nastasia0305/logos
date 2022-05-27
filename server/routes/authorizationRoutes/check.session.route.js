const router = require('express').Router();

router.get('/getsession', async(req, res) => {
const { user } = req.session
const { isLawyer } = req.session
const newUser = {...user, isLawyer}
console.log(newUser);
res.status(200).json(newUser)
})

module.exports = router;
