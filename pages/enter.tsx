import { auth, googleAuthProvider } from '@lib/firebase';
import Image from 'next/image';

export default function EnterPage({}) {
  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return <main></main>;
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className='btn-google' onClick={signInWithGoogle}>
      <Image src={'/google.png'} alt='google logo' /> Sign in with Google
    </button>
  );
}

// Sign out button
function SignOutButton() {}

function UsernameForm() {}
