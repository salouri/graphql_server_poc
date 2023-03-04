import { Widgets } from './database/widgetsModel';
import type { ProductType } from './types/product';

// The root provides a resolver function for each API endpoint
const root = {
  getProduct: async ({ id }: { id: string }) => {
    try {
      const product = await Widgets.findById({ _id: id });
      // console.log(JSON.stringify(product, null, 2));
      return product;
    } catch (error) {
      console.log('Error creating product', error);
      return error;
    }
  },
  getAllProducts: async (): Promise<[ProductType] | unknown> => {
    try {
      const products = await Widgets.find();
      console.log(JSON.stringify(products, null, 2));
      return products;
    } catch (error) {
      console.log('Error creating product', error);
      return error;
    }
  },
  createProduct: async ({ input }: { input: ProductType }): Promise<any> => {
    try {
      // const product = await Widgets.create(input); // new + save
      const newWidget = new Widgets(input);
      newWidget.id = newWidget._id;
      const saved = await newWidget.save();
      // console.log(`saved: ${JSON.stringify(saved, null, 2)}`);
      return newWidget;
    } catch (error) {
      console.log('Error creating product', error);
      return error;
    }
  },
  updateProduct: async ({ input }: { input: ProductType }): Promise<any> => {
    try {
      const { id, ...data } = input;
      const updatedWidget = await Widgets.findByIdAndUpdate(input.id, data, {
        new: true /* return the new modified document */,
        runValidators: true,
      });
      // console.log(`updatedWidget: ${JSON.stringify(updatedWidget, null, 2)}`);
      return updatedWidget;
    } catch (error) {
      console.log('Error updating product', error);
      return error;
    }
  },
  deleteProduct: async ({ id }: { id: string }): Promise<any> => {
    try {
      const deletedWidget = await Widgets.findByIdAndDelete(id);
      return 'widget deleted successfully';
    } catch (error) {
      console.log('Error deleting product', error);
      return error;
    }
  },
};

export default root;
