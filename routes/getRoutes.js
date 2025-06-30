const router = require("express").Router();
const axios = require("axios");
const { authenticateToken } = require("../controllers/loginMiddleware");

router.get("/register", async (req, res, next) => {
  try {
    res.render("register", {
      title: "Register",
      path: "/register",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/profile", async (req, res, next) => {
  try {
    res.render("profile", {
      title: "Profile",
      path: "/profile",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/profileLogoCover", async (req, res, next) => {
  try {
    res.render("profile-logo-cover", {
      title: "Profile Logo Cover",
      path: "/profileLogoCover",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/product-template", async (req, res, next) => {
  try {
    res.render("product-template", {
      title: "Product Template",
      path: "/product-template",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/import-products", async (req, res, next) => {
  try {
    res.render("import-products", {
      title: "Import Products",
      path: "/import-products",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
