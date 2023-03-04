import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language === end points are defined here
var schema = buildSchema(`
type Product {
    id: ID
    name: String
    description: String
    price: Float
    soldout: SoldoutEnum
    inventory: Int
    stores: [StoreType]!
}

type StoreType {
    id: ID
    name: String
}

enum SoldoutEnum {
    SOLDOUT
    ONSTOCK
}

type Query {
    getProduct(id: ID): Product
}

input ProductInput {
    name: String
    description: String
    price: Float
    soldout: SoldoutEnum
    inventory: Int
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
