import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import mongoose from "mongoose";

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);

export const connectDB = async () => {
  await mongoose
    .connect(DB)
    .then(() => console.log("DB connection successful!"))
    .catch((err) =>
      console.error("DB connection failed error 🔥", err.message),
    );
};
