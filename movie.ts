import { Review } from "./review";

export interface Movie {
  // can add more properties here
  imdbID: string;
  Title: string;
  Actors?: string;
  Country?: string;
  Released: string;
  Plot?: string;
  Poster: string;
  BelongsToToplist?: boolean;
  BelongsToWatchlist?: boolean;
  review? : Review;
  imdbRating?: string;
  imdbVotes?: string;
  Director?: string;
  Language?: string;
  Genre?: string;
  Year?: string;
  Type?: string;
}

export interface Search {
  Search: Movie[];
}
