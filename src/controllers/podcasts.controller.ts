import { Request, Response, NextFunction } from "express";
import { ListEpisodesService } from "../services/list-episodes.service";

export class PodcastsController {
  constructor() {}

  public static async getListEpisodes(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    res.status(200).json(await ListEpisodesService.getEpisodes());
  }
  public static async getFilterEpisodes(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { podcastName } = req.params;
    const content = await ListEpisodesService.getEpisodes(podcastName);
    res.status(200).json(content);
  }
}
