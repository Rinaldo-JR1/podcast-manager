import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast";

const dataPath = path.join(__dirname, `../repositories/podcasts.json`);

export async function getData(podcastName?: string): Promise<Podcast[]> {
  const raw = await fs.readFileSync(dataPath, "utf-8");

  let jsonFile: Podcast[] = JSON.parse(raw);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast) => podcast.podcastName === podcastName
    );
  }

  return jsonFile;
}
