import { Album, ArtistSimple, ExternalUrl } from "./gral-data";

export interface TopTrack {
  album: Album;
  artists: ArtistSimple[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: string;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
