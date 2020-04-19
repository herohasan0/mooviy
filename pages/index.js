import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class App extends React.Component {
  render() {
    const movies = this.props.store.movies;

    return (
      <div>
        <div className="movies">Movies</div>
      </div>
    );
  }
}
export default App;
