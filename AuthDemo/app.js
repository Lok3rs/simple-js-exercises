const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  User = require("./models/user"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose");

// CONNECTING TO DB
mongoose
  .connect(
    "mongodb+srv://Lok3rs:z3xjek39@cluster0-q5ytv.mongodb.net/authdemo?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("DB Connected!"))
  .catch(err => {
    console.log("DB Connection Error: ${err.message}");
  });

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "Fafik is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// MIDDLEWARE function
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

// =============================
// ROUTES
// =============================

app.get("/", (req, res) => res.render("home"));

// "Secret" page route, function isLoggedIn is checking if user is logged, declared on the bottom \/
app.get("/secret", isLoggedIn, (req, res) => res.render("secret"));

// ===========================
// =========AUTH ROUTES=======
// ===========================
app.get("/register", (req, res) => res.render("register"));

app.post("/register", (req, res) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
        return res.render("register");
      }
      passport.authenticate("local")(req, res, () => res.redirect("/secret"));
    }
  );
});

app.get("/login", (req, res) => res.render("login"));

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
  }),
  (req, res) => {}
);

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Starting server and listening

app.listen(3000, () =>
  console.log("Server started and listening on port 3000")
);
