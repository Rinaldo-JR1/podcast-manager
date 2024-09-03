import express, { NextFunction, Request, Response } from "express";
const app = express();
let port: number;
if (process.env.PORT) {
  port = parseInt(process.env.PORT);
} else {
  throw new Error("Port is not defined");
}

app.use((req: Request, res: Response, next: NextFunction) => {
  next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
