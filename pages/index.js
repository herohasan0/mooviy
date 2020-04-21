import Header from '../components/Header';
import Movie from '../components/Movie';
import Link from 'next/link';
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

    const show = () => {
      console.log(localStorage);
    };
    const clearAll = () => {
      localStorage.clear();
      console.log(localStorage);
    };

    return (
      <div className="container">
        <Header text="MOOVIY" />
        <button onClick={show}>showLocalStorage</button>
        <button onClick={clearAll}>clearAll</button>
        <div className="movies">
          {loading && !errorMessage ? (
            <p>Loading...</p>
          ) : errorMessage ? (
            <p className="errorMessage">{errorMessage}</p>
          ) : (
            movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
          )}
        </div>
      </div>
    );
  }
}
export default App;
