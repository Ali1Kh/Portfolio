import { Visitors } from "../../../DB/models/visitors.model.js";

export const getVisitors = async (req, res, next) => {
  let visitors = await Visitors.find({
    device: { $not: /(vercel|meta-externalagent|Googlebot)/i },
  }).sort({ updatedAt: -1 });
  return res.json({ success: true, results: visitors, count: visitors.length });
};
