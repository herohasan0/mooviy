import { observable } from 'mobx';

let movies = [];
let favMovieList = [];
let lastSearch = '';
if (typeof window !== 'undefined') {
  movies = localStorage.getItem('favMovies');
  movies = movies ? JSON.parse(movies) : [];
  lastSearch = localStorage.getItem('lastSearch');

  const obj = movies.map((movie) => ({
    Title: movie.Title,
    Year: movie.Year,
    Poster: movie.Poster,
    Selected: movie.Selected,
    imdbID: movie.imdbID,
  }));
  favMovieList.push(obj);
}

export class Movies {
  @observable movies = [];
  @observable detailMovie = [];
  @observable lastSearch = lastSearch;
  @observable errorMessage = null;
  @observable loading = false;
  @observable searchVal = '';
  @observable favCount = movies.length;
  @observable selected = false;
  @observable favMovies = favMovieList;
}
