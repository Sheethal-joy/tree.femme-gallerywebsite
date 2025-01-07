import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';

const NotFound = lazy(() => import('@/components/NotFound'));
const Home = lazy(() => import('@/components/Home'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
