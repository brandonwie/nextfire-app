import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const user = null;
  const username = null;

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
                <Image src={user?.photoURL} alt='user icon' />
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
