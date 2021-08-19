import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../middleware/mongodb";
import Resource from "../../../models/resource.model";

const includes = (list: Array<String>, query: String) => {
  for (var i = 0; i < list.length; i++) {
    if (list[i].toLowerCase() === query.toLowerCase()) {
      return true;
    }
  }
  return false;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      if (req.query.query === "sort") {
        const data = await Resource.find()
        res.json(data.reverse());
      }

      break;
    default:
      res.status(400).send("invalid_request");
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};

export default connectDB(handler);
