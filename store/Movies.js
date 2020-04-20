import { observable } from 'mobx';

export class Movies {
  @observable movies = [];
  @observable errorMessage = null;
  @observable loading = false;
  @observable searchVal = '';
}
