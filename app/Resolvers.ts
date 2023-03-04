import { Widgets } from './database/widgetsModel';
import type { ProductType } from './types/product';

// The root provides a resolver function for each API endpoint
const root = {
  getProduct: async ({ id }: { id: string }) => {
    try {
      const product = await Widgets.findById({ _id: id });
      console.log(JSON.stringify(product, null, 2));
      return product;
    } catch (error) {
      console.log('Error creating product', error);
      return error;
    }
  },
  createProduct: async ({ input }: { input: ProductType }): Promise<any> => {
    try {
      // const product = await Widgets.create(input);
      const newWidget = new Widgets(input);
      newWidget.id = newWidget._id;
      console.log(JSON.stringify(newWidget, null, 2));
      await newWidget.save();
      return newWidget;
    } catch (error) {
      console.log('Error creating product', error);
      return error;
    }
  },
};

export default root;
