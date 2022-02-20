import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import Navbar from '@components/Navbar';
import { useUserData } from '@lib/hooks';
import { UserContext } from '@lib/context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
