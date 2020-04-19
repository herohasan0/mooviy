import Header from '../components/Header';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class App extends React.Component {
  render() {
    const movies = this.props.store.movies;

    return (
      <div>
        <Header text="MOOVIY" />
      </div>
    );
  }
}
export default App;
