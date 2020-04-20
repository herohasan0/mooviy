import { inject, observer } from 'mobx-react';
import Movie from './Movie';

@inject('store')
@observer
class Favorites extends React.Component {
  render() {
    const movies = this.props.store.favMovies;
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
