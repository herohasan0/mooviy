import Link from 'next/link';
import Favorites from '../components/Favorites';

const favorites = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Favorites />
    </div>
  );
};

export default favorites;
