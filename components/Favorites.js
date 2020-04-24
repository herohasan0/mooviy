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
      console.log(movies);
    }
    return (
      <div className="Favorites">
        <Label text="Your favorite movies are here ✨" />
        <div className="movies">
          {movies.map((movie, index) => (
            <Movie movie={movie} index={index} />
          ))}
        </div>
        <Details />
      </div>
    );
  }
}

export default Favorites;
