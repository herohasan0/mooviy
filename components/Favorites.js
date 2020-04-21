import { inject, observer } from 'mobx-react';
import Movie from '../components/Movie';

@inject('store')
@observer
class Favorites extends React.Component {
  render() {
    let movies = [];
    if (typeof window !== 'undefined') {
      movies = localStorage.getItem('favMovies');
      movies = movies ? JSON.parse(movies) : [];
    }
    return (
      <div className="Favorites">
        {movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    );
  }
}

export default Favorites;
