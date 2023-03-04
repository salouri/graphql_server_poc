import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' }); //accessed from process.env.

export const connectToMongoDB = async (dbURL: string) => {
  try {
    const connectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true, //use the new "Server Discover and Monitoring" engine
      ssl: true,
      sslValidate: true,
    };

    await mongoose
      .connect(dbURL, connectOptions)
      .then(() => {
        // console.log(conn.connections); // once used, "conn" should be passed as a parameter
        console.log('Connected to MongoDB Atlas!');
      })
      .catch((err) => {
        console.log('Database connection failed!');
        console.log(err.message);
      });
  } catch (error) {
    console.log('Error connecting to MongoDB', error);
  }
};

export const getDBUrl = {
  mongodb: (dbUrl: string = process.env.DATABASE as string) => {
    const password = encodeURIComponent(process.env.DATABASE_PASSWORD as string);
    const user = encodeURIComponent(process.env.DATABASE_USER as string);
    const db_name = process.env.DB_NAME as string;

    const url = dbUrl
      .replace('<password>', password)
      .replace('<username>', user)
      .replace('<db_name>', db_name);
    return url;
  },
};
