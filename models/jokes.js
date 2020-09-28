//Schema\\
const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  narrative: { type: String, required: true },
  punchLine: { type: String, required: true },
});

const Joke = mongoose.model("Joke", jokeSchema);

module.exports = Joke;