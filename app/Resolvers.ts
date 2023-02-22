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
    };
  },
};

export default root;
