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
            <a>
              <button className='btn-logo'>NEXT</button>
            </a>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className='push-left'>
              <Link href='admin' passHref>
                <a>
                  <button className='btn-blue'>Write Posts</button>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref>
                <a>
                  <Image
                    src={user?.photoURL || '/hacker.png'}
                    alt='user icon'
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <>
            <Link href='/enter' passHref>
              <a>
                <button className='btn-blue'>Log in</button>
              </a>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
