import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Remove extends React.Component {
  render() {
    const remove = () => {
      if (typeof window !== 'undefined') {
        var movies = localStorage.getItem('favMovies');
        movies = movies ? JSON.parse(movies) : [];
        const index = movies.findIndex((e) => e.Title === this.props.Title);
        if (index > -1) {
          movies.splice(index, 1);
        }
        console.log(index);
        this.props.store.favCount = movies.length;
        localStorage.setItem('favMovies', JSON.stringify(movies));
        console.log(movies);
      }
    };
    return (
      <div className="Remove" title="Remove from Favorites" onClick={remove}>
        <div className="Remove-img"></div>
      </div>
    );
  }
}

export default Remove;
