import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class AddtoFav extends React.Component {
  render() {
    const add = () => {
      if (typeof window !== 'undefined') {
        var movies = localStorage.getItem('favMovies');
        movies = movies ? JSON.parse(movies) : [];
        movies.push({
          Title: this.props.Title,
          Poster: this.props.poster,
          Year: this.props.Year,
          Selected: true,
          imdbID: this.props.imdbID,
        });
        this.props.store.favCount = movies.length;
        localStorage.setItem('favMovies', JSON.stringify(movies));
      }
      this.props.store.favMovies[0].push({
        Title: this.props.Title,
        Poster: this.props.poster,
        Year: this.props.Year,
        Selected: true,
        imdbID: this.props.imdbID,
      });
    };
    return (
      <div className="Addtofav" title="Add to Favorites" onClick={add}>
        <div className="Addtofav-img"></div>
      </div>
    );
  }
}

export default AddtoFav;
