import '../styles/globals.css';
import * as firebase from '@lib/firebase';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
