import { PostItem } from './post-item';

export function PostLists() {
  return (
    <div className='flex flex-col gap-12 mb-8'>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}
