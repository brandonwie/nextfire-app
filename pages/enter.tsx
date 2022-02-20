import Image from 'next/image';
import { useContext } from 'react';

import { UserContext } from '@lib/context';
import { auth, googleAuthProvider } from '@lib/firebase';

export default function EnterPage({}) {
  const { user, username } = useContext(UserContext);
  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      {user && !username && <UsernameForm />}
      {user && username && <SignOutButton />}
      {!user && <SignInButton />}
      <SignOutButton />
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className='btn-google' onClick={signInWithGoogle}>
      <Image src={'/google.png'} alt='google logo' width={30} height={30} />
      <span style={{ marginLeft: '5px' }}>Sign in with Google</span>
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return <div>username</div>;
}
