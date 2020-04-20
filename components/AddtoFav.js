import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class AddtoFav extends React.Component {
  render() {
    const add = () => {
      this.props.store.favMovies.push({
        Title: this.props.Title,
        poster: this.props.poster,
        Year: this.props.Year,
      });
    };

    return <button onClick={add}>add</button>;
  }
}

export default AddtoFav;
