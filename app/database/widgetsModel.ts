import mongoose from 'mongoose';

const widgetSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  soldout: { type: String },
  inventory: { type: Number },
  stores: { type: Array },
});

const Widgets = mongoose.model('widgets', widgetSchema);

export { Widgets };
