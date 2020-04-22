import Link from 'next/link';
import Header from '../components/Header';
import Favorites from '../components/Favorites';

const favorites = () => {
  return (
    <div className="container">
      <Header />
      <Favorites />
    </div>
  );
};

export default favorites;
