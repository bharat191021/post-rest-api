const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Configure body-parser to handle JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/students',{ useNewUrlParser: true });

// Create a new Mongoose schema for the student model
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
});

// Create a new Mongoose model for the student collection
const Student = mongoose.model('Student', studentSchema);

// Define a route to handle student registration
app.post('/students', (req, res) => {
  const newStudent = new Student(req.body);

  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  })});
  
  post.save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Post created successfully!",
        createdPost: {
          ...result._doc,
          id: result._id,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: error,
      });
    });
  

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
