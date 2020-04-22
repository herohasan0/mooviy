import Header from '../components/Header';
import Movie from '../components/Movie';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import Loading from '../components/Loading';

const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${process.env.API_KEY}`;

@inject('store')
@observer
class App extends React.Component {
  // componentDidMount() {
  //   fetch(MOVIE_API_URL)
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       this.props.store.movies = jsonResponse.Search;
  //       this.props.store.loading = false;
  //     });
  // }

  render() {
    let movies2 = [];
    if (typeof window !== 'undefined') {
      movies2 = localStorage.getItem('favMovies');
      movies2 = movies2 ? JSON.parse(movies2) : [];
    }
    console.log(this.props.store.favMovies);
    console.log(movies2);
    const movies = this.props.store.movies;
    const loading = this.props.store.loading;
    const errorMessage = this.props.store.errorMessage;

    return (
      <div className="container">
        <Header />
        <div className="movies">
          {loading && !errorMessage ? (
            <Loading />
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
