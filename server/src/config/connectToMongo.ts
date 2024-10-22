import mongoose from "mongoose";

const connectToMongo = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URL as string);
		console.log(`connection to MongoDB ${connection.connection.host}`);
	} catch (error: any) {
		console.log(`connection to MongoDB faild ${error.message}`);
	}
};

export default connectToMongo;
