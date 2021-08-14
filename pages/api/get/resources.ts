import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../middleware/mongodb'
import Resource from '../../../models/resource.model';

function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": Resource.find()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).send(err)
      })
      break
    default: res.status(400).send("invalid_request")
  }
}

export default connectDB(handler);