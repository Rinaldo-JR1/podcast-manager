import { Request, Response, NextFunction } from "express";

export class PodcastsController {
  constructor() {}

  public static async getListEpisodes(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    res.status(200).json([
      {
        podcastName: "flow",
        episode: "TECNOLOGIA E IA [+ FABIO AKITA]",
        cover: "https://i.ytimg.com/vi/--slRywdonM/hqdefault.jpg",
        link: "https://www.youtube.com/live/--slRywdonM?si=a-O0Nzt1Z_L0F28F",
        videoId: "--slRywdonM",
        category: ["tecnologia", "IA"],
      },
    ]);
  }
}
