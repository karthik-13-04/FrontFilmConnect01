const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    googlePlay: "https://play.google.com/store/apps/details?id=com.filmconnect.example",
    appStore: "https://apps.apple.com/app/id0000000000"
  });
});

module.exports = router;
