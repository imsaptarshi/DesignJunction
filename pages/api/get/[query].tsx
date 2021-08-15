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
      const { query } = req.query;
      const cursor = Resource.find({
        $or: [
          { title: new RegExp(String(query), "i") },
          { description: new RegExp(String(query), "i") },
        ],
      }).cursor();
      const resourcesWithTitle = [];
      for (
        let doc = await cursor.next();
        doc != null;
        doc = await cursor.next()
      ) {
        resourcesWithTitle.push(doc); // Prints documents one at a time
      }
      const tagCursor = await Resource.find();
      const resourcesWithTag = [];
      for (let i = 0; i < tagCursor.length; i++) {
        if (includes(tagCursor[i].tags, String(query))) {
          resourcesWithTag.push(tagCursor[i]);
        }
      }
      const resources = [];
      for (
        let i = 0;
        i < Math.min(resourcesWithTag.length, resourcesWithTitle.length);
        i++
      ) {
        if (
          String(resourcesWithTag[i]._id) === String(resourcesWithTitle[i]._id)
        ) {
          resources.push(resourcesWithTag[i]);
        } else {
          resources.push(resourcesWithTag[i]);
          resources.push(resourcesWithTitle[i]);
        }
      }
      if (resourcesWithTag.length > resourcesWithTitle.length) {
        for (
          let i = resourcesWithTitle.length;
          i < resourcesWithTag.length;
          i++
        ) {
          resources.push(resourcesWithTag[i]);
        }
      } else {
        for (
          let i = resourcesWithTag.length;
          i < resourcesWithTitle.length;
          i++
        ) {
          resources.push(resourcesWithTitle[i]);
        }
      }
      res.json(resources);

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
