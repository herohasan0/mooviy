import Header from '../components/Header';
import Movie from '../components/Movie';
import Search from '../components/Search';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class App extends React.Component {
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
            this.props.store.loading = true;
          } else {
            this.props.store.errorMessage = json.Error;
            this.props.store.loading = false;
          }
        });
    };

    return (
      <div>
        <Header text="MOOVIY" />
        <Search search={searchFunc} />
        <div className="movies">
          {movies.map((movie, index) => (
            <Movie movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
