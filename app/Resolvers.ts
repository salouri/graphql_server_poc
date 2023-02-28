import crypto from 'crypto';
import type { ProductType, StoreType } from './types/product';

class RandomDie {
  numSides: number;

  constructor(numSides: number) {
    this.numSides = numSides;
  }

  rollOnce() {
    return 1 + Math.floor(Math.random() * this.numSides);
  }

  roll({ numRolls }: { numRolls: number }) {
    var output = [];
    for (var i = 0; i < numRolls; i++) {
      output.push(this.rollOnce());
    }
    return output;
  }
}

class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  soldout: boolean;
  stores: StoreType[];

  constructor(
    id: string,
    { name, description, price, soldout, stores }: ProductType
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.soldout = soldout;
    this.stores = stores.map((store) => ({
      id: crypto.randomUUID(),
      name: store.name,
    }));
  }
}
const productsDatabase: Record<string, ProductType> = {};

// The root provides a resolver function for each API endpoint
const root = {
  getDie: ({ numSides }: { numSides: number }) => new RandomDie(numSides || 6),
  getProduct: () => {
    return {
      id: 1,
      name: 'Product 1',
      description: 'Product 1 description',
      price: 9.99,
      soldout: false,
      stores: [
        { id: 1, name: 'Store 1' },
        { id: 2, name: 'Store 2' },
      ],
    };
  },
  createProduct: ({
    input,
  }: {
    input: ProductType;
  }): { id: string } & ProductType => {
    const _id = crypto.randomUUID({ disableEntropyCache: true }); //

    const product = new Product(_id, input);
    const {id, ...rest} = product;
    productsDatabase[_id] = rest;
    console.log(JSON.stringify(productsDatabase, null, 2));
    return product;
  },
};

export default root;
