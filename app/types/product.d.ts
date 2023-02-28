type ProductType = {
  name: string;
  description: string;
  price: number;
  soldout: boolean;
  stores: StoreType[];
};

type StoreType = {
  id: string;
  name: String;
};

export { ProductType, StoreType };
