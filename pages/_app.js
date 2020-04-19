import { Movies } from '../store/Movies';
import { Provider } from 'mobx-react';
import { useMemo } from 'react';

export default function App({ Component, pageProps }) {
  const store = useMemo(() => {
    return new Movies();
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
