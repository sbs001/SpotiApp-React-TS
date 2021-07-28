import { ArtistSimple, Image } from "./gral-data";

export interface Followers {
  href?: any;
  total: number;
}

export interface Artist extends ArtistSimple {
  followers: Followers;
  genres: string[];
  images: Image[];
  popularity: number;
}
