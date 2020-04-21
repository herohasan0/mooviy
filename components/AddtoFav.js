import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class AddtoFav extends React.Component {
  render() {
    const add = () => {
      if (typeof window !== 'undefined') {
        var movies = localStorage.getItem('favMovies');
        movies = movies ? JSON.parse(movies) : [];
        movies.push({
          Title: this.props.Title,
          Poster: this.props.poster,
          Year: this.props.Year,
        });
        localStorage.setItem('favMovies', JSON.stringify(movies));
      }
    };
    return <button onClick={add}>add</button>;
  }
}

export default AddtoFav;
