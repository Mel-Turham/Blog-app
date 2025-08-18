import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useUser } from '@clerk/clerk-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

function WritePage() {
  const { isLoaded, isSignedIn } = useUser();

  if (isLoaded && !isSignedIn)
    return <div>Veuillez vous connecter pour continuer.</div>;

  return (
    <div className='flex flex-col gap-6 min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]'>
      <h1 className='text-3xl lg:text-4xl xl:text-6xl font-bold'>
        Créer un nouvel article
      </h1>

      <form className='flex flex-col gap-6'>
        <Button variant={'outline'} type='button' className='w-fit'>
          Ajouter une image de couverture
        </Button>
        <input
          className='text-4xl font-semibold outline-none'
          type='text'
          placeholder='Mon super article'
        />
        <div className=''>
          <Select>
            <SelectTrigger className='sm:w-max'>
              <SelectValue placeholder='Sélectionner une catégorie' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='general'>Général</SelectItem>
              <SelectItem value='web'>Développement web</SelectItem>
              <SelectItem value='mobile'>Développement mobile</SelectItem>
              <SelectItem value='design'>Design</SelectItem>
              <SelectItem value='securite'>Sécurité</SelectItem>
              <SelectItem value='autres'>Autres</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Textarea
          className=' sm:w-3/5 resize-none'
          name='desc'
          placeholder='Une petit description...'
        />

        <ReactQuill theme='snow' className='flex-1 ' />
        <Button type='submit' className='w-36'>
          Publier
        </Button>
      </form>
    </div>
  );
}

export default WritePage;
