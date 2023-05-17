import { Movie } from "./movie";
export interface Toplist {
  userId: number;
  movieIds: string[];
  movies?: Movie[];
}
