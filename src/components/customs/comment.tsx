import { ImageKit } from './image';

export function Comment() {
  return (
    <div className='p-4 bg-card border-input rounded-xl mb-8 shadow'>
      {/* USER INFORMATION */}
      <div className='flex gap-2 items-center'>
        <ImageKit
          src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
          alt='user-profile'
          className='w-10 h-10 rounded-full object-cover'
        />
        <span className='font-medium'>MelTheCoder</span>
        <span className='text-muted-foreground text-sm '>2 days ago</span>
      </div>

      {/* COMMENT */}
      <div className=''>
        <p className='mt-4 text-sm '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
          tenetur nesciunt, sequi consequatur totam maiores. Nihil praesentium
          assumenda, eligendi inventore quia, fuga officiis nesciunt dolore,
          quis laborum dignissimos deserunt reprehenderit?
        </p>
      </div>
    </div>
  );
}
