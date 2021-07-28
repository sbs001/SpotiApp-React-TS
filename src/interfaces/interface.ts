import { NewReleases } from "./new-releases";

export interface State {
  newReleases: NewReleases[];
}

export interface Action {
  type: string;
  payload: any;
}
