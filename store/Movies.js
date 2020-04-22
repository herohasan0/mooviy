import { observable } from 'mobx';

let movies = [];
let favMovieList = [];
if (typeof window !== 'undefined') {
  movies = localStorage.getItem('favMovies');
  movies = movies ? JSON.parse(movies) : [];
  const obj = movies.map((movie) => ({
    Title: movie.Title,
    Year: movie.Year,
    Poster: movie.Poster,
    Selected: movie.Selected,
  }));
  console.log(obj);
  favMovieList.push(obj);
}

export class Movies {
  @observable movies = [];
  @observable errorMessage = null;
  @observable loading = false;
  @observable searchVal = '';
  @observable favCount = movies.length;
  @observable selected = false;
  @observable favMovies = favMovieList;
}
