import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import { UserContext } from '@lib/context';

export default function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/' passHref>
            <button className='btn-logo'>NEXT</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className='push-left'>
              <Link href='admin' passHref>
                <button className='btn-blue'>Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref>
                <Image
                  src={'/google.png'}
                  alt='user icon'
                  width={30}
                  height={30}
                />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <>
            <Link href='/enter' passHref>
              <button className='btn-blue'>Log in</button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
