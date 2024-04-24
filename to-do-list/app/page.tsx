"use client"
import React from 'react';
import TodolistWrapper from './components/TodolistWrapper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
 const Home: React.FC = () => {
  return (
    <main className=" min-h-screen ">
      <ToastContainer />
      <TodolistWrapper />
    </main>
  );
}
export default Home