import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, firestore } from '@lib/firebase';

export function useUserData() {
  const [user] = useAuthState(auth as any);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    console.log('[hooks] user:', user);
    let unsubscribe;

    if (user) {
      const ref = firestore.collection('users').doc(user.uid);

      console.log('[hooks] ref:', ref);

      unsubscribe = ref.onSnapshot((doc) => {
        console.log('ref.onSnapshot - doc:', doc);
        console.log('doc.data():', doc.data());
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }
    return unsubscribe;
  }, [user]);

  return { user, username };
}
