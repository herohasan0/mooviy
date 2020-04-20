import Header from '../components/Header';
import Movie from '../components/Movie';
import Search from '../components/Search';
import { inject, observer } from 'mobx-react';

const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${process.env.API_KEY}`;

@inject('store')
@observer
class App extends React.Component {
  componentDidMount() {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.props.store.movies = jsonResponse.Search;
        this.props.store.loading = false;
      });
  }

  render() {
    const movies = this.props.store.movies;
    const loading = this.props.store.loading;
    const errorMessage = this.props.store.errorMessage;

    const searchFunc = (searchVal) => {
      this.props.store.loading = true;
      this.props.store.errorMessage = null;

      fetch(
        `https://www.omdbapi.com/?s=${searchVal}&apikey=${process.env.API_KEY}`
      )
        .then((response) => response.json())
        .then((jsonResponse) => {
          if (jsonResponse.Response === 'True') {
            this.props.store.movies = jsonResponse.Search;
            this.props.store.loading = false;
          } else {
            this.props.store.errorMessage = jsonResponse.Error;
            this.props.store.loading = false;
          }
        });
    };

    return (
      <div>
        <Header text="MOOVIY" />
        <Search search={searchFunc} />
        <div className="movies">
          {loading && !errorMessage ? (
            <p>Loading...</p>
          ) : errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            movies.map((movie, index) => <Movie key={index} movie={movie} />)
          )}
        </div>
      </div>
    );
  }
}
export default App;
