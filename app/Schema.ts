import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language === end points are defined here
var schema = buildSchema(`
type Product {
    id: ID
    name: String
    description: String
    price: Float
    soldout: Boolean
}

type RandomDie {
  numSides: Int!
  rollOnce: Int!
  roll(numRolls: Int!): [Int]
}

type Query {
 getDie(numSides: Int): RandomDie
 getProduct: Product
    }
    `);

export default schema;
