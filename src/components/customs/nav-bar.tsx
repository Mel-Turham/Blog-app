import { useState } from 'react';
import { ImageKit } from './image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
export function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className=' w-full h-16 md:h-20 flex items-center justify-between'>
      {/* LOGO */}
      <Link to='/' className='flex items-center gap-4 font-bold text-2xl'>
        {/* LOGO IMAGE */}
        <ImageKit
          w={200}
          h={200}
          src='https://ik.imagekit.io/qml7igwug/logo.png?tr=w-1920,c-at_max'
          alt='logo-mel-blog'
          className='shrink-0 w-8 h-8'
        />
        <span className=''>Melblog</span>
      </Link>

      {/* MOBILE MENU */}

      <div className='flex md:hidden'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer font-semibold'
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? 'close' : 'open'}
        </button>

        {/* MOBILE LINK MENU LIST */}
        <menu
          className={`w-full h-screen bg-background  flex flex-col items-center font-medium text-lg justify-center fixed  top-16 gap-5 ${
            open ? '-right-0' : '-right-[100%]'
          } transition-all duration-300 ease-in-out`}
        >
          <Link to='/'>Home</Link>
          <Link to='/'>Trending</Link>
          <Link to='/'>Most Popular</Link>
          <Link to='/'>About</Link>
          <Link to='/login'>
            <button className='py-2 px-4 rounded-3xl bg-blue-800'>
              Login 🖐️
            </button>
          </Link>
        </menu>
      </div>

      {/* DESKTOP MENU */}
      <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>Trending</Link>
        <Link to={'/'}>Most Popular</Link>
        <Link to={'/'}>About</Link>

        <SignedOut>
          <Link to={'/login'}>
            <button className='py-2 px-4 rounded-3xl bg-blue-800'>
              Login 🖐️
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
