import { data } from "../data/data";

export class ListEpisodesService {
  public static async getEpisodes() {
    return data;
  }
}
