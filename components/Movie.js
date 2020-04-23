import AddtoFav from './AddtoFav';
import Remove from './Remove';
import { inject, observer } from 'mobx-react';
import Details from './Details';
import Showdetails from './Showdetails';

const DEFAULT_PLACEHOLDER_IMAGE = '/no-img.png';

@inject('store')
@observer
class Movie extends React.Component {
  render() {
    let movies = [];
    let selected = false;
    if (typeof window !== 'undefined') {
      movies = this.props.store.favMovies[0];
      movies.map((movie) => {
        if (movie.Title === this.props.movie.Title) {
          selected = true;
        }
      });
    }

    const poster =
      this.props.movie.Poster === 'N/A'
        ? DEFAULT_PLACEHOLDER_IMAGE
        : this.props.movie.Poster;
    return (
      <div className="Movie">
        <div className="Movie-top">
          <Showdetails imdbID={this.props.movie.imdbID} />
          <img
            width="200"
            height="300"
            className="Movie-top-img"
            src={poster}
            alt={`The movie titled: ${this.props.movie.Title}`}
          />
        </div>
        <div className="Movie-bottom">
          <div className="Movie-bottom-text">
            <h2 className="Movie-bottom-text-title">
              {this.props.movie.Title}
            </h2>
            <p className="Movie-bottom-text-year">{this.props.movie.Year}</p>
          </div>
          {selected ? (
            <Remove Title={this.props.movie.Title} />
          ) : (
            <AddtoFav
              Title={this.props.movie.Title}
              poster={poster}
              Year={this.props.movie.Year}
              imdbID={this.props.movie.imdbID}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Movie;
