export function Search() {
  return (
    <div className='bg-input flex items-center gap-2 rounded-full p-2'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
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
  );
}
