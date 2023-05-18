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
