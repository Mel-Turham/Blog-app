import { Link } from 'react-router-dom';
export function MainCategories() {
  return (
    <div className='hidden md:flex items-center justify-center p-4 gap-8 shadow-lg rounded-3xl bg-card border-input border xl:rounded-full'>
      {/* LINKS */}
      <div className='flex-1 flex items-center justify-between flex-wrap'>
        <Link
          to={'/posts'}
          className='bg-blue-800 text-white rounded-full py-2 px-4'
        >
          Tout les posts
        </Link>
        <Link
          to={'/posts?cat=web-design'}
          className='hover:bg-blue-50 hover:text-gray-700 rounded-full py-2 px-4'
        >
          Web Design
        </Link>
        <Link
          to={'/posts?cat=front-end'}
          className='hover:bg-blue-50 hover:text-gray-700 rounded-full py-2 px-4'
        >
          Front End
        </Link>
        <Link
          to={'/posts?cat=back-end'}
          className='hover:bg-blue-50 hover:text-gray-700 rounded-full py-2 px-4'
        >
          Back End
        </Link>
        <Link
          to={'/posts?cat=web-design'}
          className='hover:bg-blue-50 hover:text-gray-700 rounded-full py-2 px-4'
        >
          Web Design
        </Link>
        <Link
          to={'/posts?cat=devops'}
          className='hover:bg-blue-50 hover:text-gray-700 rounded-full py-2 px-4'
        >
          DevOps
        </Link>
        <Link
          to={'/posts?cat=mobile'}
          className='hover:bg-blue-50 hover:text-gray-700 rounded-full py-2 px-4'
        >
          Mobile
        </Link>
        <Link
          to={'/posts?cat=cloud'}
          className='hover:bg-blue-50 hover:text-gray-700 rounded-full py-2 px-4'
        >
          Cloud
        </Link>
      </div>
      {/* separator */}
      <span className='text-muted-foreground text-lg font-medium'>|</span>
      {/* Search */}
      <div className='bg-input flex items-center gap-2 rounded-full p-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='lucide lucide-search-icon lucide-search text-muted-foreground'
        >
          <path d='m21 21-4.34-4.34' />
          <circle cx='11' cy='11' r='8' />
        </svg>
        <input
          type='text'
          placeholder='Rechercher un article...'
          className='outline-none'
        />
      </div>
    </div>
  );
}
