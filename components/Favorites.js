import { inject, observer } from 'mobx-react';
import Movie from '../components/Movie';

@inject('store')
@observer
class Favorites extends React.Component {
  render() {
    let movies = [];
    if (typeof window !== 'undefined') {
      // movies = localStorage.getItem('favMovies');
      // movies = movies ? JSON.parse(movies) : [];
      movies = this.props.store.favMovies[0];
    }

    return (
      <div className="Favorites">
        <div className="movies">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
