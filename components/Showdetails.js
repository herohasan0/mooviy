import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Showdetails extends React.Component {
  render() {
    const show = () => {
      const movie = document.getElementsByClassName('Movie')[this.props.index];
      const detail = document.getElementById('Details');
      const remove = document.getElementById('Remove');
      detail.classList.add('show');
      remove.classList.add('remove-show');
      detail.style.top = `${movie.offsetTop}px`;

      fetch(
        `http://www.omdbapi.com/?i=${this.props.imdbID}&apikey=${process.env.API_KEY}`
      )
        .then((response) => response.json())
        .then((jsonResponse) => {
          if (jsonResponse.Response === 'True') {
            this.props.store.detailMovie = jsonResponse;
          } else {
            //Error
          }
        });
    };
    return <div className="Showdetails" onClick={show}></div>;
  }
}

export default Showdetails;
