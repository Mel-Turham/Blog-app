import { FeaturesPosts } from '@/components/customs/features-posts';
import { MainCategories } from '@/components/customs/main-categories';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className='mt-8 flex flex-col gap-8'>
      <div className='flex items-center gap-4'>
        <Link to={'/'}>Home</Link>
        <span>&bull;</span>
        <span className='text-blue-800'>Blogs and Articles</span>
      </div>

      <div className='flex items-center justify-between'>
        <div className=''>
          <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold dark:text-gray-300'>
            Partagez vos idées, créez des histoires uniques chaque jour.
          </h1>
          <p className='text-md md:text-xl mt-8'>
            Rejoignez notre espace d'écriture, explorez de nouveaux récits et
            laissez vos mots inspirer une communauté passionnée.
          </p>
        </div>
        {/* LINKS */}
        <Link to={'/write'} className=' hidden md:block relative'>
          <svg
            viewBox='0 0 200 200'
            height='200'
            width='200'
            className='text-lg tracking-widest'
            fill='none'
          >
            <path
              id='circlePath'
              d='M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0'
            />
            <text fill='white'>
              <textPath href='#circlePath' startOffset='0%'>
                Write your story &bull;
              </textPath>
              <textPath href='#circlePath' startOffset='50%'>
                Share your idea &bull;
              </textPath>
            </text>
          </svg>
          <button className='bg-blue-500 absolute inset-0 m-auto w-20 h-20 flex items-center justify-center rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='lucide lucide-arrow-up-right-icon lucide-arrow-up-right'
            >
              <path d='M7 7h10v10' />
              <path d='M7 17 17 7' />
            </svg>
          </button>
        </Link>
      </div>
      {/* MAIN CATEGORIES */}
      <MainCategories />

      {/* FEATURED POSTS */}
      <FeaturesPosts />
    </section>
  );
}
