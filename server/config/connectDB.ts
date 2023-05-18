import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connectDB = async () => {
    try {
        dotenv.config();
        await mongoose.connect(process.env.DB_URI!, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as any);

        console.log("MongoDB Connected");
    } catch (error: any) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }

    const db = mongoose.connection;

    db.on("error", (error) => {
        console.error("MongoDB connection error:", error);
    });

    db.once("open", () => {
        console.log("MongoDB connected");
    });
};

export default connectDB;
