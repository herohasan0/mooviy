import Link from 'next/link';
import Header from '../components/Header';
import Favorites from '../components/Favorites';
import Loading from '../components/Loading';

const favorites = () => {
  return (
    <div className="container">
      <Header />
      <Favorites />
    </div>
  );
};

export default favorites;
