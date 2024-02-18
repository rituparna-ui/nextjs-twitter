import mongoose from 'mongoose';

const mongoDBUri =
  'mongodb+srv://ritu:qwer1234@ritu.4xakife.mongodb.net/?retryWrites=true&w=majority';

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState) {
      console.log('already connected');
      return;
    }
    await mongoose.connect(mongoDBUri);
    console.log('connected');
  } catch (err) {
    console.log(err);
  }
};
