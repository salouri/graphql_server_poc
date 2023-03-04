import { Sequelize, DataTypes } from 'sequelize';
import casual from 'casual';

const sequelize = new Sequelize('sqlite::memory:'); // create cached database in memeory

// define a sequelize model: Categories
const Categories = sequelize.define('categories', {
  category: DataTypes.STRING,
  description: DataTypes.STRING,
});

// Fake data generator
Categories.sync({ force: true }).then(() => {
  for (let i = 0; i < 10; i++) {
    Categories.create({
      category: casual.word,
      description: casual.description,
    });
  }
});

export { Categories };
