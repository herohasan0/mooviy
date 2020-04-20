const Movie = (props) => {
  return (
    <div className="Movie">
      <h2 className="Movie-title">{props.movie.Title}</h2>
      <div>
        <img
          width="200"
          height="300"
          className="Movie-img"
          src={props.movie.Poster}
        />
      </div>
      <p className="Movie-year">{props.movie.Year}</p>
    </div>
  );
};

export default Movie;
