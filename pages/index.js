import Header from '../components/Header';
import Movie from '../components/Movie';
import { inject, observer } from 'mobx-react';
import Loading from '../components/Loading';
import Label from '../components/Label';
import Details from '../components/Details';

@inject('store')
@observer
class App extends React.Component {
  componentDidMount() {
    const lastSearch = this.props.store.lastSearch;
    const MOVIE_API_URL = lastSearch
      ? `https://www.omdbapi.com/?s=${lastSearch}&apikey=${process.env.API_KEY}`
      : `https://www.omdbapi.com/?s=man&apikey=${process.env.API_KEY}`;
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.props.store.movies = jsonResponse.Search;
        this.props.store.loading = false;
      });
  }

  render() {
    const lastSearch = this.props.store.lastSearch;
    const movies = this.props.store.movies;
    const loading = this.props.store.loading;
    const errorMessage = this.props.store.errorMessage;

    const remove = () => {
      const detail = document.getElementById('Details');
      const remove = document.getElementById('Remove');
      detail.classList.remove('show');
      remove.classList.remove('remove-show');
    };

    return (
      <div className="body">
        <Header />
        <Details />
        <div id="Remove" onClick={remove}></div>
        <div className="container">
          {lastSearch ? (
            <Label text={`Your last search is ' ${lastSearch} '.`} />
          ) : (
            <Label text="You will see your last search here." />
          )}

          <div className="movies">
            {loading && !errorMessage ? (
              <Loading />
            ) : errorMessage ? (
              <p className="errorMessage">{errorMessage}</p>
            ) : (
              movies.map((movie, index) => (
                <Movie
                  index={index}
                  key={`${index}-${movie.Title}`}
                  movie={movie}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
