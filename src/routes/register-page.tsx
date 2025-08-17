import { SignUp } from '@clerk/clerk-react';

function RegisterPage() {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-64px)]'>
      <SignUp signInUrl='/login' />
    </div>
  );
}

export default RegisterPage;
