import { inject, observer } from 'mobx-react';
import Movie from './Movie';
import Details from './Details';
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
        {movies.length > 0 ? (
          <Label text="Your favorite movies are here ✨" />
        ) : (
          <Label text="Your favorite movies will be here ✨" />
        )}

        <div className="movies">
          {movies.map((movie, index) => (
            <Movie
              key={`${index}-${movie.Title}`}
              movie={movie}
              index={index}
            />
          ))}
        </div>
        <Details />
      </div>
    );
  }
}

export default Favorites;
