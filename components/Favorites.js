import { inject, observer } from 'mobx-react';
import Movie from '../components/Movie';
import Label from './Label';

@inject('store')
@observer
class Favorites extends React.Component {
  render() {
    let movies = [];
    if (typeof window !== 'undefined') {
      movies = this.props.store.favMovies[0];
    }

    return (
      <div className="Favorites">
        <Label text="Your favorite movies are here." />
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
