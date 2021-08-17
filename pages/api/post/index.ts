import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../middleware/mongodb'
import Resource from '../../../models/resource.model';

function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "POST":
            const data = req.body;
            const newResource = new Resource({
                ...data,
            });

            newResource
                .save()
                .then((data: any) => {
                    res.status(200).json({
                        data,
                        successfull: true,
                    });
                })
                .catch((err: any) => res.status(400).json({ error: err, successfull: false }));

            break
        default: res.status(400).send("invalid_request")
    }
}

export const config = {
    api: {
        externalResolver: true
    }
}

export default connectDB(handler);