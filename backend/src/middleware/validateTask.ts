import { Request, Response, NextFunction } from "express";

// This is your unique feature for Commit 9: Specialized Request Validation
export const validateTask = (req: Request, res: Response, next: NextFunction) => {
  const { title, description } = req.body;

  if (!title || title.trim().length < 3) {
    return res.status(400).json({ 
      message: "Validation Error: Title is required and must be at least 3 characters long." 
    });
  }

  if (description && description.length > 500) {
    return res.status(400).json({ 
      message: "Validation Error: Description cannot exceed 500 characters." 
    });
  }

  next(); // If everything is fine, move to the controller
};