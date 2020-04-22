import { observable } from 'mobx';

let movies = [];
if (typeof window !== 'undefined') {
  movies = localStorage.getItem('favMovies');
  movies = movies ? JSON.parse(movies) : [];
}

export class Movies {
  @observable movies = [];
  @observable errorMessage = null;
  @observable loading = false;
  @observable searchVal = '';
  @observable favCount = movies.length;
  @observable selected = false;
}
