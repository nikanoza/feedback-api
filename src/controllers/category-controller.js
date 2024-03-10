import Feedback from "../models/Feedback.js";

export const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();

    return res.status(200).json(feedbacks);
  } catch (error) {
    return res.status(501).json({ message: "server internal error" });
  }
};
