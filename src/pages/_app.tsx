import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { AnyAction, Store } from 'redux';
import wrapper from '@/store';

import '@/styles/globals.css';

type CustomAppProps<T = {}> = AppProps<T> & {
  store: Store<any, AnyAction>;
};

export default function App({
  Component,
  ...rest
}: CustomAppProps<{}>) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
