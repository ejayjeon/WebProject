var router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});
router.get("/list", (req, res) => {
  res.render("list.ejs");
});
router.get("/add", (req, res) => {
  res.render("add.ejs");
});
router.post("/addok", (req, res, next) => {
  res.redirect("/list");
});

module.exports = router;
