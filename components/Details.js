import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Details extends React.Component {
  render() {
    const remove = () => {
      const detail = document.getElementById('Details');
      const remove = document.getElementById('Remove');
      detail.classList.remove('show');
      remove.classList.remove('remove-show');
    };
    const movie = this.props.store.detailMovie;
    return (
      <div className="Details" id="Details">
        <div className="Details-body">
          <div className="Details-body-left">
            <img
              height="370px"
              src={movie.Poster}
              alt=""
              className="Details-body-left-img"
            />
          </div>
          <div className="Details-body-right">
            <div className="Details-body-right-title">
              <div className="Details-body-right-title-text">{movie.Title}</div>
              <div className="Details-body-right-title-remove" onClick={remove}>
                X
              </div>
            </div>
            <div className="Details-body-right-imdb">
              <div className="Details-body-right-imdb-logo">
                <img src="/imdb-logo.svg" alt="" />
              </div>
              <div className="Details-body-right-imdb-point">
                <span>{movie.imdbRating}</span>
                <span>/10</span>
              </div>
            </div>
            <div className="Details-body-right-content">
              <div className="Details-body-right-content-year">
                <span>Year:</span>
                <span>{movie.Year}</span>
              </div>
              <div className="Details-body-right-content-director">
                <span>Director:</span>
                <span>{movie.Director}</span>
              </div>
              <div className="Details-body-right-content-genre">
                <span>Genre:</span>
                <span>{movie.Genre}</span>
              </div>
              <div className="Details-body-right-content-actors">
                <span>Actors:</span>
                <span>{movie.Actors}</span>
              </div>
              <div className="Details-body-right-content-plot">
                <span>Plot:</span>
                <span>{movie.Plot}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
