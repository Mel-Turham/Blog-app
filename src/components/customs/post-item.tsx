import { Link } from 'react-router-dom';
import { ImageKit } from './image';

export function PostItem() {
  return (
    <div className='flex  flex-col xl:flex-row gap-8'>
      {/* IMAGE */}
      <div className='md:hidden xl:block xl:w-1/3'>
        <ImageKit
          src='https://www.iscale-software.com/wp-content/uploads/2022/10/CODING1-e1594426444795.png'
          alt=''
          className='rounded-2xl object-cover w-full h-full'
        />
      </div>
      {/* DETAILS */}
      <div className=' flex-col flex gap-2 xl:w-2/3'>
        <Link to={'/test'} className='text-4xl font-semibold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className='flex items-center gap-2 text-muted-foreground text-sm'>
          <span>Ecrire par </span>
          <Link className='text-blue-800' to={'/test'}>
            MelTheCoder
          </Link>
          <span>sur</span>
          <Link className='text-blue-800' to={'/test'}>
            Web Design
          </Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis
          alias cum tenetur. Quasi quas animi quos, error et necessitatibus
          temporibus laboriosam accusantium repellat exercitationem consequatur
          fugit harum iste fugiat.
        </p>
        <Link to={'/test'} className='text-blue-800 underline text-sm'>
          Lire plus
        </Link>
      </div>
    </div>
  );
}
