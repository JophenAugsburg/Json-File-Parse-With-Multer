const express = require('express');
const { graphql } = require('graphql');
const { resolvers } = require('../controllers/resolvers/resolvers');
const { typedefs } = require('../controllers//typeDefs/typeDefs');

const router = express.Router();

let graphQL;

router.post('/', async (req, res) => graphQL(req, res));

graphQL = async (req, res) => {
  let resolversType = "Query";
  if (req.body.graphql.includes("mutation")) {
    resolversType = "Mutation";
  }
  const result = await graphql(typedefs, req.body.graphql, resolvers[resolversType]).then(response => response.data);

  res.send(result);
};

module.exports.routes = router;
