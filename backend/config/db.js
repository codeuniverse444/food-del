import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sumitgohil:9737080219@cluster0.oxfkuru.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
