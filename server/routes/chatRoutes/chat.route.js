const router = require("express").Router();
const { Chat } = require("../../db/models");
const { Anketa } = require("../../db/models");

// router.get("/", async (req, res) => {
//   const allMessages = await Chat.findAll({
//     where: { client_id: req.session.user.id },
//     raw: true,
//   });
//   res.json(allMessages);
// });

module.exports = router;
