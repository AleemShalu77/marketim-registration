require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser"); // Make sure to install cookie-parser
const request = require("request");

const app = express();
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

const port = 5000;

app.use(cookieParser());
// ejs
app.set("view engine", "ejs");

// static files
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res) => {
      res.set("Access-Control-Allow-Origin", "*"); // Adjust for production security
    },
  })
);

app.get("/proxy/image", (req, res) => {
  const imageUrl = req.query.url;
  if (!imageUrl) return res.status(400).send("Image URL is required");
  request
    .get(imageUrl)
    .on("error", (err) => {
      console.error("Proxy error:", err);
      res.status(500).send("Error fetching image");
    })
    .pipe(res);
});

// routes
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/getRoutes");

app.use(authRoutes);
app.use(dashboardRoutes);

app.use((error, req, res, next) => {
  console.error(error.stack);
  if (!res.headersSent) {
    res.status(500).render("error", { message: "An internal error occurred" });
  } else {
    console.error("Error after headers sent");
  }
});

app.listen(port, () => {
  console.log(`Serever listening at Port: ${port}`);
});
