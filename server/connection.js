const mongoose = require('mongoose');

const URI = process.env.URI;
mongoose.set('strictQuery', false);
async function connection() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Book', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connection established successfully');
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

 
connection();