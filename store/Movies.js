import { observable } from 'mobx';

export class Movies {
  @observable movies = [];
  @observable errorMessage = null;
  @observable loading = false;
  @observable searchVal = '';
  @observable favMovies = [
    {
      movieTitle: '123',
      moviePoster: '123',
      movieYear: '11',
    },
  ];
}
