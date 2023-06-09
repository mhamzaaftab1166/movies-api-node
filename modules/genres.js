const Joi = require("joi");
const mongoose = require("mongoose");
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 15,
  },
});
const Genre = mongoose.model("Genre", genreSchema);
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(5).max(15).required(),
  };

  return Joi.validate(genre, schema);
}
exports.genreSchema = genreSchema;
exports.validate = validateGenre;
exports.Genre = Genre;
