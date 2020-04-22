import AddtoFav from './AddtoFav';
import Remove from './Remove';

const DEFAULT_PLACEHOLDER_IMAGE = '/no-img.png';

const Movie = (props) => {
  let movies = [];
  let selected = false;
  if (typeof window !== 'undefined') {
    movies = localStorage.getItem('favMovies');
    movies = movies ? JSON.parse(movies) : [];
    movies.map((movie) => {
      if (movie.Title === props.movie.Title) {
        selected = true;
      }
    });
  }
  const poster =
    props.movie.Poster === 'N/A'
      ? DEFAULT_PLACEHOLDER_IMAGE
      : props.movie.Poster;
  return (
    <div className="Movie">
      <div className="Movie-top">
        <img
          width="200"
          height="300"
          className="Movie-top-img"
          src={poster}
          alt={`The movie titled: ${props.movie.Title}`}
        />
      </div>
      <div className="Movie-bottom">
        <div className="Movie-bottom-text">
          <h2 className="Movie-bottom-text-title">{props.movie.Title}</h2>
          <p className="Movie-bottom-text-year">{props.movie.Year}</p>
        </div>
        {selected ? (
          <Remove
            Title={props.movie.Title}
            poster={poster}
            Year={props.movie.Year}
          />
        ) : (
          <AddtoFav
            Title={props.movie.Title}
            poster={poster}
            Year={props.movie.Year}
          />
        )}
      </div>
    </div>
  );
};

export default Movie;
