import { observable } from 'mobx';

export class Movies {
  @observable movies = [];
  @observable searchVal = '';
}
