import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language === end points are defined here
var schema = buildSchema(`
type Product {
    id: ID
    name: String
    description: String
    price: Float
    soldout: Boolean
    stores: [Store]!
}

type Store {
    id: ID
    name: String
}


type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
}

type Query {
    getDie(numSides: Int): RandomDie
    getProduct(id: ID): Product
}

input ProductInput {
    name: String
    description: String
    price: Float
    soldout: Boolean
    stores: [StoreInput]!
}

input StoreInput {
    name: String
}

type Mutation {
    createProduct(input: ProductInput): Product
}

`);

export default schema;
