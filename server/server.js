const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");

require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
const port = 3000;

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// MongoDB setup
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("Connected to the Database.");
});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose Connection Error : ${err}`);
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
