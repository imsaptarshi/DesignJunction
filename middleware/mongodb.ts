import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

const connectDB = (handler: (arg0: NextApiRequest, arg1: NextApiResponse) => any) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(String(process.env.NEXT_PUBLIC_URI), {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true
    });
    return handler(req, res);
};

export default connectDB;