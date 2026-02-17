import { Request, Response } from "express";
import Newsletter from "../models/newsletterModel";

export const subscribeNewsletter = async (req: Request, res: Response) => {
  try {
    console.log("Request body:", req.body);
    const { email } = req.body;

    if (!email)
      return res.status(400).json({ message: "Email is required" });

    const exists = await Newsletter.findOne({ email });
    if (exists)
      return res.status(409).json({ message: "Email already subscribed" });

    await Newsletter.create({ email });

    res.status(201).json({
      message: "Subscribed successfully to newsletter",
    });
  } catch (error) {
    console.error("Newsletter subscription error FULL:", error);
    res.status(500).json({ message: "Subscription failed" });
  }
};
