const router = require("express").Router();
const { Support } = require("../db/models");

router.post("/", async (req, res) => {
  const { question, description, id } = req.body;
  const { isLawyer } = req.session.user

  if (isLawyer) {
    await Support.create({
      question,
      description,
      lawyer_id: id,
    });
    console.log('====>','321');
    res
      .status(200)
      .json({
        message:
          "Ваша заявка передана в службу поддержки. Наши специалисты свяжутся с вами в ближайшее время.",
      });
  } else  {
    await Support.create({
      question,
      description,
      client_id: id,
    });
    console.log('====>','123');
    res
      .status(200)
      .json({
        message:
          "Ваша заявка передана в службу поддержки. Наши специалисты свяжутся с вами в ближайшее время.",
      });
  }
});

module.exports = router;
