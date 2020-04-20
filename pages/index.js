import Header from '../components/Header';
import Movie from '../components/Movie';
import Search from '../components/Search';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class App extends React.Component {
  render() {
    const movies = this.props.store.movies;
    const searchVal = this.props.store.searchVal;

    const searchFunc = (searchVal) => {
      fetch(
        `https://www.omdbapi.com/?s=${searchVal}&apikey=${process.env.API_KEY}`
      )
        .then((response) => response.json())
        .then((jsonResponse) => {
          if (jsonResponse.Response === 'True') {
            this.props.store.movies = jsonResponse.Search;
          } else {
            //error
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
