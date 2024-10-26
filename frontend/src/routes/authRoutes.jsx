import { Outlet } from 'react-router-dom';
import AuthGuard from '../guards/AuthGuard';
import GuestGuard from '../guards/GuestGuard';

const authRoutes = [
  {
    path: '/auth',
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <div>Login element Placeholder</div>
          </GuestGuard>
        ),
      },
      {
        path: 'signup',
        element: (
          <GuestGuard>
            <div>Signup element Placeholder</div>
          </GuestGuard>
        ),
      },
      {
        path: 'logout',
        element: (
          <AuthGuard>
            <div>Logout element Placeholder</div>,
          </AuthGuard>
        ),
      },
    ],
  },
];

export default authRoutes;
