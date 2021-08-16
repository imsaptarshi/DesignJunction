import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../middleware/mongodb'
import Resource from '../../../models/resource.model';

function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "POST":
            const { id } = req.query;
            Resource.findById(id).then((data: any) => {
                const incoming = req.body;
                data.title = incoming.title;
                data.description = incoming.description;
                data.image = incoming.image;
                data.redirect = incoming.redirect;
                data.isFeatured = incoming.isFeatured;
                data.isAdvertised = incoming.isAdvertised;
                data.tags = incoming.tags;

                data.save().then(() => {
                    res.status(200).json({
                        post: data,
                        updated: true,
                    });
                }).catch((err: any) => { res.status(400).send(err) });
            }).catch((err: any) => {
                res.status(400).send(err)
            })
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