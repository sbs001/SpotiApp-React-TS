import { Album } from "./gral-data";

export interface NewReleases extends Album {
  available_markets: string[];
}
