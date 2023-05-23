const mongoose = require("mongoose");

const responsesSchema = new mongoose.Schema({//schema defines what a valid document should look like
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/ //standardizes input values
  },
  email: {
    type: String,
  },
  reason: {
    type: String,
    required: true,
    enum: ["Question", "Problem with Clothing", "Return Item", "Other"]
  },
  description: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
});

const Responses = mongoose.model("Responses", responsesSchema);//turns schema into a model named Responses. responsesSchema passed into second argument of model method. Empowers schema to manipulate database.

module.exports = Responses;//exports Responses out --> becomes JS module that can be called in another file using a require
