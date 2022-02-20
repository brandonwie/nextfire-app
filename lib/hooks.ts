import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, firestore } from '@lib/firebase';

export function useUserData() {
  const [user] = useAuthState(auth as any);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    console.log('user', user);
    let unsubscribe;

    if (user) {
      const ref = firestore.collection('users').doc(user.uid);

      console.log('ref', ref);

      unsubscribe = ref.onSnapshot((doc) => {
        console.log('doc.onSnapshot', doc);
        console.log('doc.data()', doc.data());
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }
    return unsubscribe;
  }, [user]);

  return { user, username };
}
