const router = require('express').Router();

router.get('/getsession', async(req, res) => {
const { user } = req.session
const { isLawyer } = req.session
user.isLawyer = isLawyer
res.status(200).json(user)
})

module.exports = router;
