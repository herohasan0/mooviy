import Link from 'next/link';
import Search from '../components/Search';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Header extends React.Component {
  render() {
    const searchFunc = (searchVal) => {
      this.props.store.loading = true;
      this.props.store.errorMessage = null;

      fetch(`https://www.omdbapi.com/?s=${searchVal}&apikey=68fbdc23`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          if (jsonResponse.Response === 'True') {
            this.props.store.movies = jsonResponse.Search;
            this.props.store.loading = false;
          } else {
            this.props.store.errorMessage = jsonResponse.Error;
            this.props.store.loading = false;
          }
        });
    };

    return (
      <header className="Header">
        <div className="Header-left">
          <Link href="/">
            <a>
              <img src="/logo.png" alt="" className="Header-left-img" />
            </a>
          </Link>
        </div>
        <div className="Header-right">
          <Search search={searchFunc} />
          <Link href="/favorites">
            <a className="Header-right-link">
              favorites
              <span className="Header-right-link-indicator">
                {this.props.store.favCount}
              </span>
            </a>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
