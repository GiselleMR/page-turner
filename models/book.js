const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
  title: String,
  googleid: {
    type: String,
    unique: true,
  },
  subtitle: String,
  authors: [String],
  description: String,
  image: {
    type: String,
    // default:,
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

module.exports = mongoose.model ('Book', bookSchema)