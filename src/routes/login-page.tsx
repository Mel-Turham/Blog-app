import { SignIn } from '@clerk/clerk-react';

function LoginPage() {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-64px)]'>
      <SignIn signUpUrl='/register' />
    </div>
  );
}

export default LoginPage;
