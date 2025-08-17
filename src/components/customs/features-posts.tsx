import { Link } from 'react-router-dom';
import { ImageKit } from './image';

export function FeaturesPosts() {
  return (
    <div className='flex mt-8 flex-col lg:flex-row gap-8'>
      {/* FIRST POST */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        {/* IMAGE */}
        <ImageKit
          src='https://www.centre-europeen-formation.fr/wp-content/uploads/2023/03/slider-dev-web-fullstack.jpeg'
          alt=''
          className='rounded-3xl object-cover'
        />
        {/* DETAILS */}
        <div className=' flex items-center gap-4'>
          <h2 className='font-semibold lg:text-lg'>01.</h2>
          <Link className='text-blue-800 lg:text-lg' to={''}>
            Full Stack Web Development
          </Link>
          <span className='text-muted-foreground text-sm'>2 days ago</span>
        </div>
        {/* TITLE */}
        <Link
          className='text-xl lg:text-3xl font-semibold lg:font-bold'
          to={'#'}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>
      {/* OTHERS POSTS */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        {/* SECOND ITEM */}
        <div className='lg:h-1/3 flex justify-between gap-4'>
          <ImageKit
            src='https://miro.medium.com/v2/resize:fit:1358/1*bgxW56Ocv2rdCibpMFkx_g.jpeg'
            alt=''
            className='object-cover w-1/3 rounded-3xl aspect-video'
          />

          {/* DETAILS AND TITLE POST  */}
          <div className='w-2/3'>
            <div className=' flex items-center gap-4'>
              <h2 className='font-semibold'>02.</h2>
              <Link className='text-blue-800' to={''}>
                Full Stack Web Development
              </Link>
              <span className='text-muted-foreground text-sm'>2 days ago</span>
            </div>
            {/* TITLE */}
            <Link
              className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'
              to={'#'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* THIRD ITEM */}
        <div className='lg:h-1/3 flex justify-between gap-4'>
          <ImageKit
            src='https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_developerjobdescription.jpg'
            alt=''
            className='object-cover w-1/3 rounded-3xl aspect-video'
          />

          {/* DETAILS AND TITLE POST  */}
          <div className='w-2/3'>
            <div className=' flex items-center gap-4'>
              <h2 className='font-semibold'>03.</h2>
              <Link className='text-blue-800' to={''}>
                Full Stack Web Development
              </Link>
              <span className='text-muted-foreground text-sm'>2 days ago</span>
            </div>
            {/* TITLE */}
            <Link
              className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'
              to={'#'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* FOURTH */}
        <div className='lg:h-1/3 flex justify-between gap-4'>
          <ImageKit
            src='https://www.training.com.au/wp-content/uploads/Full-Stack-Developer-1.jpeg'
            alt=''
            className='object-cover w-1/3 rounded-3xl aspect-video'
          />

          {/* DETAILS AND TITLE POST  */}
          <div className='w-2/3'>
            <div className=' flex items-center gap-4'>
              <h2 className='font-semibold'>04.</h2>
              <Link className='text-blue-800' to={''}>
                Full Stack Web Development
              </Link>
              <span className='text-muted-foreground text-sm'>2 days ago</span>
            </div>
            {/* TITLE */}
            <Link
              className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'
              to={'#'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
