const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const BlogModel = require("./model.js"); // Make sure to create this model

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});

// POST API to add employee data
app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel.create(req.body); // Use create() instead of save() for simplicity
    res.send({ message: "Employee added", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error adding employee" });
  }
});

// GET API to fetch employee data
app.get("/get", async (req, res) => {
  try {
    const result = await BlogModel.find(); // Fetch all entries from the collection
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching employees" });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
