import AddtoFav from './AddtoFav';

const DEFAULT_PLACEHOLDER_IMAGE = '/no-img.png';

const Movie = (props) => {
  const poster =
    props.movie.Poster === 'N/A'
      ? DEFAULT_PLACEHOLDER_IMAGE
      : props.movie.Poster;
  return (
    <div className="Movie">
      <h2 className="Movie-title">{props.movie.Title}</h2>
      <div>
        <img
          width="200"
          height="300"
          className="Movie-img"
          src={poster}
          alt={`The movie titled: ${props.movie.Title}`}
        />
      </div>
      <p className="Movie-year">{props.movie.Year}</p>
      <AddtoFav
        Title={props.movie.Title}
        poster={poster}
        Year={props.movie.Year}
      />
    </div>
  );
};

export default Movie;
