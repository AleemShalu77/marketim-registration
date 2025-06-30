const router = require("express").Router();

router.get("/", (req, res) => {
  res.redirect("login");
});

router.get("/login", async (req, res, next) => {
  try {
    res.render("login", {
      title: "Login",
      path: "/login",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
