import Header from '../components/Header';
import Movie from '../components/Movie';
import Search from '../components/Search';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class App extends React.Component {
  render() {
    const movies = this.props.store.movies;

    return (
      <div>
        <Header text="MOOVIY" />
        <Search />
        <Movie />
      </div>
    );
  }
}
export default App;
