import { Artist } from "./artist";
import { NewReleases } from "./new-releases";

export interface State {
  newReleases: NewReleases[],
  artistsFound: Artist[],
}

export interface Action {
  type: string;
  payload: any;
}
