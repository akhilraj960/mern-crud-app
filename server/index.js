const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./connection");

const BookApi = require("./routes/BookRouter");

const app = express();

port = 8080;

app.use(cors());

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/", BookApi);

app.listen(port, () => {
  console.log(`Server Running on port:${port}`);
});
