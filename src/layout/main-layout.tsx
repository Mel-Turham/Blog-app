import { NavBar } from '@/components/customs/nav-bar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className='container'>
      <NavBar />
      <Outlet />
    </div>
  );
}
