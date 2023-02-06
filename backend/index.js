require("dotenv").config();
const passport = require("passport");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

//configure mongoose
mongoose.connect(
  process.env.DATABASE_URL || "mongodb+srv://admin:Jfp0TvFr62RSqcYk@cluster0.ap1uo.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: false, limit: "20mb" }));
app.use(require("serve-static")(__dirname + "/../../public"));
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport Config
require("./config/passport")(passport);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

const routes = require("./routes/routes");

app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
