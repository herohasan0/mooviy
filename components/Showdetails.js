import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Showdetails extends React.Component {
  render() {
    const show = () => {
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
      const detail = document.getElementById('Details');
      detail.classList.toggle('show');
    };
    return <div className="Showdetails" onClick={show}></div>;
  }
}

export default Showdetails;
