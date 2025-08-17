export function PostMenuActions() {
  return (
    <div className='flex flex-col'>
      <h4 className='text-lg font-medium'>Actions</h4>
      <div className='flex flex-col gap-2 mt-2'>
        <button className=' flex text-sm text-blue-600 items-center  gap-1 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-bookmark-icon lucide-bookmark'
          >
            <path d='m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z' />
          </svg>
          <span className=''>Sauvegarder</span>
        </button>
        <button className='flex text-sm text-red-500 items-center  gap-1 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-trash2-icon lucide-trash-2'
          >
            <path d='M10 11v6' />
            <path d='M14 11v6' />
            <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6' />
            <path d='M3 6h18' />
            <path d='M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
          </svg>
          Supprimer
        </button>
      </div>
    </div>
  );
}
