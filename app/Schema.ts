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
    getAllProducts: [Product]
}

input ProductInput {
    id: ID
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
    updateProduct(input: ProductInput): Product
    deleteProduct(id: ID!): String
}

type Subscription {
    productPriceUpdated(id: ID!): Product
}

`);

export default schema;
