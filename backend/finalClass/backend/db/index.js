import mongoose from "mongoose";
async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected on host:", connectionInstance.connection.host);

        console.log('Database connected')
    }
    catch (err) {
        console.log(`Error occur while connection`, err)
        process.exit(1)
    }
}
export default connectDB