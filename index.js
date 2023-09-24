const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const express = require("express");
const app = express();
const port = 4000;

const MONGODBURL =
  "mongodb+srv://appuser:U33TgJdecX0yYQrj@cluster0.gudu8y5.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

/*const server = new ApolloServer({
  typeDefs,
  resolvers,
});*/

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getListings", (req, res) => {
  resolvers.Query.getAllListing((page = 1), (limit = 10)).then((data) =>
    res.json(data)
  );
});

mongoose
  .connect(MONGODBURL, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDb connected");
    return app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("appError", err);
  });
