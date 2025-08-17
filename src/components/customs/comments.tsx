import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Comment } from './comment';

export function Comments() {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
      <h4 className='my-4 text-muted-foreground text-2xl underline underline-offset-4'>
        COMMENTAIRES
      </h4>
      <div className='flex gap-8 flex-col'>
        <Textarea
          className='min-h-[120px]'
          placeholder='Ajouter un commentaire'
        />
        <Button className='w-fit'>Publier</Button>
      </div>
      <div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}
