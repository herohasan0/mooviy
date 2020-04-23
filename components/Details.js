const Details = (props) => {
  return (
    <div className="Details">
      <details>
        <summary></summary>
        <div className="Details-body">
          <div className="Details-body-left">
            <img
              height="370px"
              src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX370.jpg"
              alt=""
              className="Details-body-left-img"
            />
          </div>
          <div className="Details-body-right">
            <div className="Details-body-right-title">Iron Man</div>
            <div className="Details-body-right-imdb">
              <div className="Details-body-right-imdb-logo">
                <img src="/imdb-logo.svg" alt="" />
              </div>
              <div className="Details-body-right-imdb-point">
                <span>8.2</span>
                <span>/10</span>
              </div>
            </div>
            <div className="Details-body-right-content">
              <div className="Details-body-right-content-year">
                <span>Year:</span>
                <span>2018</span>
              </div>
              <div className="Details-body-right-content-director">
                <span>Director:</span>
                <span>Jon Favreau</span>
              </div>
              <div className="Details-body-right-content-genre">
                <span>Genre:</span>
                <span>Action, Adventure, Sci-Fi</span>
              </div>
              <div className="Details-body-right-content-actors">
                <span>Actors:</span>
                <span>
                  Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth
                  Paltrow
                </span>
              </div>
              <div className="Details-body-right-content-plot">
                <span>Plot:</span>
                <span>
                  After being held captive in an Afghan cave, billionaire
                  engineer Tony Stark creates a unique weaponized suit of armor
                  to fight evil.
                </span>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default Details;
