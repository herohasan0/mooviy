import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class AddtoFav extends React.Component {
  render() {
    const add = () => {
      this.props.store.favMovies.push({
        movieTitle: this.props.Title,
        moviePoster: this.props.poster,
        movieYear: this.props.Year,
      });
    };

    return <button onClick={add}>add</button>;
  }
}

export default AddtoFav;
