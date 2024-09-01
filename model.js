const mongoose = require('mongoose');

// Define the schema for the BlogModel
const blogSchema = new mongoose.Schema({
  EmpName: {
    type: String,
    required: true,
    trim: true
  },
  designation: {
    type: String,
    required: true,
    trim: true
  },
  empId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  img_url: {
    type: String,
    required: true,
    trim: true
  }
});

// Create the model using the schema
const BlogModel = mongoose.model('Employee', blogSchema);

module.exports = BlogModel;
