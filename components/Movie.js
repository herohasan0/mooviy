const Movie = (props) => {
  return (
    <div className="Movie">
      <h2 className="Movie-title">Movie Title</h2>
      <div>
        <img width="200" height="300" className="Movie-img" />
      </div>
      <p className="Movie-year">Movie Year</p>
    </div>
  );
};

export default Movie;
