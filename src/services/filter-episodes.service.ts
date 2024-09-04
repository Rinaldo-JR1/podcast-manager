import { getData } from "../repositories/podcast.repository";

export class FilterEpisodesService {
  public static async getEpisodes(podcastName: string) {
    const data = await getData(podcastName);
    return data;
  }
}
