const { meetingService } = require("../services");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const meetings = await meetingService.load();
  res.render("meetings", { meetings });
});

router.get("/search", async (req, res) => {
  const clientId = req.query.clientId;
  const meetings = await meetingService.findByClientId(clientId);

  res.render("meetings", { meetings });
});

module.exports = router;
