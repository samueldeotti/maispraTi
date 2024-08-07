import { Outlet } from 'react-router-dom';
import Home from './components/Home';

export default function Layout() {
  return (
    <>
      <Home />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}
