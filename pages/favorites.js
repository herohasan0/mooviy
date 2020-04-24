import Header from '../components/Header';
import Favorites from '../components/Favorites';
import Details from '../components/Details';

const remove = () => {
  const detail = document.getElementById('Details');
  const remove = document.getElementById('Remove');
  detail.classList.remove('show');
  remove.classList.remove('remove-show');
};

const favorites = () => {
  return (
    <div className="body">
      <Header />
      <Details />
      <div id="Remove" onClick={remove}></div>
      <div className="container">
        <Favorites />
      </div>
    </div>
  );
};

export default favorites;
