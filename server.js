///////////////////////////
// Environmental Variables
///////////////////////////
// REMEMBER TO CREATE .env file
require("dotenv").config();
const { PORT, SECRET } = process.env;

///////////////////////////
// Dependencies
//////////////////////////

// Bringing in Express
const express = require("express");
const app = express();

// IMPORT DATABASE CONNECTIONS
const mongoose = require("./db/dbconn");

// ROUTERS
const authRouter = require("./controllers/auth");
const testRouter = require("./controllers/test");

// OTHER IMPORTS
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const morgan = require("morgan");

///////////////////////////////
// Set View Engine
///////////////////////////////

//set view engine to express-react-views
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

////////////
//MIDDLEWARE
////////////
// SESSIONS, this allows you to use req.session for tracking session data
app.use(
  session({
    secret: SECRET,
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodified
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //comment if not using forms
app.use(methodOverride("_method"));
// app.use(express.json()) uncomment if using json
app.use(morgan("tiny")); //logging

const Joke = require("./models/jokes.js");

///////////////
//Routes and Routers
//////////////
app.use("/auth", authRouter);
app.use("/test", testRouter);

//I
app.get("/jokes", (req, res) => {
  Joke.find({}, (error, allJokes) => {
    res.render("Index", { fruits: allJokes });
  });
});

//N
app.get("/new", (req, res) => {
  res.render("New");
});

//D
// app.delete("/fruits/:id", (req, res) => {
//   Fruit.findByIdAndRemove(req.params.id, (err, data) => {
//     res.redirect("/fruits");
//   });
// });

//U
app.put("/jokes/:id", (req, res) => {
  Joke.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedModel) => {
      res.redirect("/");
    }
  );
});

//C
app.post("/jokes", (req, res) => {
  Joke.create(req.body, (error, joke) => {
    res.redirect("/jokes");
  });
});

//E
// app.get("/fruits/:id/edit", (req, res) => {
//   Fruit.findById(req.params.id, (err, foundFruit) => {
//     res.render("edit.jsx", { fruit: foundFruit });
//   });
// });

//S

////////////////////////
//APP LISTENER
////////////////////////
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
