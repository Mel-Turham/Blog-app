import { Comments } from '@/components/customs/comments';
import { ImageKit } from '@/components/customs/image';
import { PostMenuActions } from '@/components/customs/post-menu-actions';
import { Search } from '@/components/customs/search';
import { Link } from 'react-router-dom';

export default function SignlePostPage() {
  return (
    <div className=' flex flex-col mt-8 gap-8'>
      {/* DETAILS */}
      <div className='flex gap-8'>
        <div className='flex flex-col gap-6 lg:w-3/5'>
          <h1 className='text-xl md:text-3xl xl:text-6xl 2xl:text-7xl font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
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
          <p className='text-sm text-pretty font-medium text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            explicabo id voluptates, doloribus delectus odit, odio at, iure
            beatae reprehenderit aliquam? Fuga doloribus suscipit, velit dolores
            optio saepe repellat maiores.
          </p>
        </div>
        <div className='hidden lg:block w-2/5 aspect-video'>
          <ImageKit
            src='https://www.centre-europeen-formation.fr/wp-content/uploads/2023/03/slider-dev-web-fullstack.jpeg'
            alt='random image'
            className='w-full h-full object-cover rounded-2xl'
            w={600}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* text */}
        <div className='flex flex-col gap-6 text-justify lg:text-lg'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            dolorum soluta sit, mollitia incidunt illo eum aspernatur beatae
            voluptatem? Quos dolor amet qui minima fugiat? Sit laborum, magnam
            consectetur voluptatem deserunt aliquid perferendis delectus quas,
            totam beatae quibusdam cumque aspernatur esse quod sapiente quis
            dolorum fugiat minus repellat sequi iste. Fuga veniam harum magnam
            saepe culpa dolores modi voluptates mollitia asperiores aliquid sit,
            ipsum earum est. Atque eum, nostrum ut eaque blanditiis enim tempora
            perspiciatis cumque perferendis labore ducimus. Voluptatem enim
            quisquam commodi hic cum eaque sunt, perspiciatis, quod sequi
            distinctio ratione autem vero possimus iure provident consequatur,
            quidem illo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            dolorum soluta sit, mollitia incidunt illo eum aspernatur beatae
            voluptatem? Quos dolor amet qui minima fugiat? Sit laborum, magnam
            consectetur voluptatem deserunt aliquid perferendis delectus quas,
            totam beatae quibusdam cumque aspernatur esse quod sapiente quis
            dolorum fugiat minus repellat sequi iste. Fuga veniam harum magnam
            saepe culpa dolores modi voluptates mollitia asperiores aliquid sit,
            ipsum earum est. Atque eum, nostrum ut eaque blanditiis enim tempora
            perspiciatis cumque perferendis labore ducimus. Voluptatem enim
            quisquam commodi hic cum eaque sunt, perspiciatis, quod sequi
            distinctio ratione autem vero possimus iure provident consequatur,
            quidem illo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            dolorum soluta sit, mollitia incidunt illo eum aspernatur beatae
            voluptatem? Quos dolor amet qui minima fugiat? Sit laborum, magnam
            consectetur voluptatem deserunt aliquid perferendis delectus quas,
            totam beatae quibusdam cumque aspernatur esse quod sapiente quis
            dolorum fugiat minus repellat sequi iste. Fuga veniam harum magnam
            saepe culpa dolores modi voluptates mollitia asperiores aliquid sit,
            ipsum earum est. Atque eum, nostrum ut eaque blanditiis enim tempora
            perspiciatis cumque perferendis labore ducimus. Voluptatem enim
            quisquam commodi hic cum eaque sunt, perspiciatis, quod sequi
            distinctio ratione autem vero possimus iure provident consequatur,
            quidem illo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            dolorum soluta sit, mollitia incidunt illo eum aspernatur beatae
            voluptatem? Quos dolor amet qui minima fugiat? Sit laborum, magnam
            consectetur voluptatem deserunt aliquid perferendis delectus quas,
            totam beatae quibusdam cumque aspernatur esse quod sapiente quis
            dolorum fugiat minus repellat sequi iste. Fuga veniam harum magnam
            saepe culpa dolores modi voluptates mollitia asperiores aliquid sit,
            ipsum earum est. Atque eum, nostrum ut eaque blanditiis enim tempora
            perspiciatis cumque perferendis labore ducimus. Voluptatem enim
            quisquam commodi hic cum eaque sunt, perspiciatis, quod sequi
            distinctio ratione autem vero possimus iure provident consequatur,
            quidem illo.
          </p>
        </div>
        {/* menu */}
        <div className='px-4 flex flex-col gap-3 h-max sticky top-8'>
          <div className=''>
            <h1 className='text-lg font-medium'>Auteur</h1>
            <div className='flex gap-2 mt-2'>
              <ImageKit
                src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                alt=''
                className='w-12 h-12 rounded-full object-cover'
                w={48}
                h={48}
              />
              <div className='space-y-2'>
                <Link to={'/test'} className='text-base font-bold'>
                  MelTheCoder
                </Link>
                <p className='text-muted-foreground text-xs'>
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <div className='flex gap-2 '>
                  <Link to={'/test'}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      preserveAspectRatio='xMidYMid'
                      viewBox='0 0 256 256'
                    >
                      <path
                        fill='#fff'
                        d='M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z'
                      />
                    </svg>
                  </Link>
                  <Link to={'/test'}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 36 36'
                      fill='url(#facebook__a)'
                      height='18'
                      width='18'
                    >
                      <defs>
                        <linearGradient
                          x1='50%'
                          x2='50%'
                          y1='97.078%'
                          y2='0%'
                          id='facebook__a'
                        >
                          <stop offset='0%' stop-color='#0062E0' />
                          <stop offset='100%' stop-color='#19AFFF' />
                        </linearGradient>
                      </defs>
                      <path d='M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z' />
                      <path
                        fill='#FFF'
                        d='m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <PostMenuActions />
          <div className='flex flex-col gap-2 text-sm'>
            <h1 className='text-lg font-medium'>Categories</h1>
            <Link className='underline underline-offset-4' to={'/test'}>
              Tout les post
            </Link>
            <Link className='underline underline-offset-4' to={'/test'}>
              Web Design
            </Link>
            <Link className='underline underline-offset-4' to={'/test'}>
              Web Development
            </Link>
            <Link className='underline underline-offset-4' to={'/test'}>
              Front-end
            </Link>
            <Link className='underline underline-offset-4' to={'/test'}>
              Backend
            </Link>
            <Link className='underline underline-offset-4' to={'/test'}>
              DevOps
            </Link>
          </div>

          <div className='flex flex-col gap-2 text-sm'>
            <h1 className='text-lg font-medium'>Recherche</h1>
            <Search />
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
}
