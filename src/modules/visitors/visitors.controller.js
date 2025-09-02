import { Visitors } from "../../../DB/models/visitors.model.js";

export const getVisitors = async (req, res, next) => {
  let visitors = await Visitors.find({
    device: { $not: /vercel/i },
  }).sort({ createdAt: -1 });
  return res.json({ success: true, results: visitors, count: visitors.length });
};
