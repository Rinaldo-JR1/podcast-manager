import express, { NextFunction, Request, Response } from "express";
import { PodcastsController } from "./controllers/podcasts-controller";

const app = express();
let port: number;

app.use(express.json());

if (process.env.PORT) {
  port = parseInt(process.env.PORT);
} else {
  throw new Error("Port is not defined");
}

app.use((req: Request, res: Response, next: NextFunction) => {
  next();
});

app.get("/", PodcastsController.getListEpisodes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
