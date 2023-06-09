const { Router } = require("express");//grabs router from express framework using deconstruction process --> {Router} pulls router object out of express (expressjs.com for reference)
const Responses = require("../models/Responses");//imports Responses model into router
const router = Router();//instantiate router and store in Router()
// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newResponses = new Responses(request.body);//takes request body and makes a new Responses model
  newResponses.save((error, record) => {//save that in a new responses variable, tell mongoose to do a save in that responses document
    // if (error && error.name && error.name === "ValidationError")
    if (error?.name === "ValidationError")
      return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);
    response.json(record);
  });
});
// Get (read) all records from the collection
router.get("/", (request, response) => {
  Responses.find({}, (error, record) => {
    if (error) return response.status(500).json(error.errors);
    response.json(record);
  });
});
// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Responses.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error.errors);
    response.json(record);
  });
});
router.delete("/:id", (request, response) => {
  Responses.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error.errors);
    response.json(record);
  });
});
// setting an update 9.1
router.put("/:id", (request, response) => {
  const body = request.body;
  Responses.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't update the customer
        name: body.name,
        email: body.email,
        reason: body.reason,
        description: body.description
      }
    },
    {
      //options
      new: true,
      upsert: true
    },
    //response handler
    (error, record) => {
      if (error?.name === "ValidationError")
        return response.status(400).json(error.errors);
      if (error) return response.status(500).json(error.errors);
      response.json(record);
    }
  );
});
module.exports = router;
