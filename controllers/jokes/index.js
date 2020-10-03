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

//Logged In Index\\
router.get("/", auth, async (req,res) => {
  try{
  const jokes = await Joke.find({username: req.session.username})
  res.render("jokes/index.jsx", {jokes})}
  catch(error){
    console.log(error)
  }
})

//New\\
router.get("/new", auth, async (req,res)=>{
  try{
    res.render("jokes/new.jsx")
  }
  catch(error){
    console.log(error)
  }
})

//Create\\
router.post("/", auth, async (req,res) =>{
  try{
    req.body.username = req.session.username
    const newJoke = await Joke.create(req.body)
    res.redirect("/jokes/")
  }
  catch(error){
    console.log(error)
  }
})

//Delete\\
router.delete("/:id", auth, async (req, res) => {
  try{
    await Joke.findByIdAndDelete(req.params.id)
    res.redirect("/jokes/")
  }
  catch(error){
    console.log(error)
  }
})

//Edit\\
router.get("/edit/:id", auth, async (req,res) => {
  try{
    const joke = await Joke.findById(req.params.id)
    res.render("jokes/edit.jsx", {joke})
  }
  catch(error){
    console.log(error)
  }
})

//Update\\
router.put("/edit/:id", auth, async (req,res) => {
  try{
    req.body.username = req.session.username
    await Joke.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/jokes/")
  }
  catch(error){
    console.log(error)
  }
})

//Show\\
router.get("/:id", async (req,res) =>{
  try{
    const joke = await Joke.findById(req.params.id)
    res.render("jokes/show.jsx", {joke: joke})}
    catch(error){
      console.log(error)
    }
})

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
