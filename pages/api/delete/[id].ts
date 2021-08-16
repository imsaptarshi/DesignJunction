import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../middleware/mongodb'
import Resource from '../../../models/resource.model';

function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "DELETE":
            const { id } = req.query;
            Resource.findByIdAndDelete(id).then((data: any) => {
                res.status(200).json({ data, deleted: true })
            }).catch((err: any) => { res.status(400).send(err) })
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