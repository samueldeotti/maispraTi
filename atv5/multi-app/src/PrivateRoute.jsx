import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from './Layout';

export default function PrivateRoute() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return isAuthenticated ? <Layout /> : <Navigate to="/" />;
}
