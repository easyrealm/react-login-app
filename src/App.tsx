import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AuthProvider from './components/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import ContactPage from './pages/ContactPage';
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
    ),
    errorElement: <NotFoundPage />
  },
  {
    path: '/contact',
    element: (
      <ProtectedRoute>
        <ContactPage />
      </ProtectedRoute>
    )
  },
  {
    path: '/login',
    element: (
      <LoginPage />
    )
  },
  {
    path: '/signup',
    element: (
      <SignupPage />
    )
  }
]);


function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
