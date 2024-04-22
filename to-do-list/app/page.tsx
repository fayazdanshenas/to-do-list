"use client"
// pages/index.tsx
import React, { useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

// Define the Task interface
interface Task {
  id: number;
  text: string;
 }
 const Home: React.FC = () => {
 const [tasks, setTasks] = useState<Task[]>([]);

 const addTask = (task: string) => {
    setTasks([...tasks, { id: Date.now(), text: task }]);
 };

 const editTask = (id: number, newText: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
 };

 const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
 };
 console.log('=====> tasks',tasks);
 
  return (
    <main className=" min-h-screen ">
      <div className="text-center my-5 flex flex-col justify-center items-center gap-4 w-full">
        <h1 className="text-2xl font-bold">ToDo List</h1>
        <AddTask onAddTask={addTask} />
      </div>
      <div className="text-center my-5 flex flex-col justify-center items-center gap-4 w-full">
        <Tasks tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />
      </div>
    </main>
  );
}
export default Home