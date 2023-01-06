const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const cors = require("cors");
const app = express();

connectDB();

app.use(express.json());

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
