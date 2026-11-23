import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const validEmails = ["zane@mail.com", "cassidy@mail.com"];

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Express Server");
});

app.get("/valid-email", (req: Request, res: Response) => {
  const { email } = req.query;
  if (typeof email !== "string" || validEmails.indexOf(email) === -1) {
    return res.status(200).send("Invalid Email");
  }
  return res.status(200).send("Valid");
});

app.listen(process.env.PORT || 80, (err) => {
  if (err) console.log(err.message);
  console.log(`Listening on port ${process.env.PORT || 3000}`);
});
