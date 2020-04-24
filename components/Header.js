import Link from 'next/link';
import Head from 'next/head';
import Search from '../components/Search';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Header extends React.Component {
  render() {
    const searchFunc = (searchVal) => {
      this.props.store.loading = true;
      this.props.store.errorMessage = null;

      fetch(
        `https://www.omdbapi.com/?s=${searchVal}&apikey=${process.env.API_KEY}`
      )
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
        <Head>
          <title>MOOVIY - Find Best Movies</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" type="image/png" href="/favicon.svg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <div className="Header-body">
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
        </div>
      </header>
    );
  }
}

export default Header;
