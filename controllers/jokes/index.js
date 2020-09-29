//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Joke = require("../../models/jokes")

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

//Index\\
router.get("/", auth, async (req,res) => {
  try{
  const jokes = await Joke.find({username: req.session.username})
  res.render("jokes/index.jsx", {jokes})}
  catch(err) {
    console.log(err)
  }
})

//New\\
router.get("/new", auth, async (req,res)=>{
  res.render("jokes/signup.jsx")
})

//Create\\
router.post("/", auth, async (req,res) =>{
  req.body.username = req.session.username
  const newJoke = await Joke.create(req.body)
  res.redirect("/jokes/")
})

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
