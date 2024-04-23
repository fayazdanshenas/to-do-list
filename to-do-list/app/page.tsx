"use client"
import React from 'react';
import TodolisatWrapper from './components/TodolistWrapper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
 const Home: React.FC = () => {
  return (
    <main className=" min-h-screen ">
      <ToastContainer />
      <TodolisatWrapper />
    </main>
  );
}
export default Home