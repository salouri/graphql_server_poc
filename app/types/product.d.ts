type ProductType = {
  _id: any;
  name: string;
  description: string;
  price: number;
  soldout: SoldoutType;
  stores: StoreType[];
  inventory: number;
};

type SoldoutType = 'SOLDOUT' | 'ONSTOCK';

type StoreType = {
  id: string;
  name: String;
};

export { ProductType, StoreType, SoldoutType };
