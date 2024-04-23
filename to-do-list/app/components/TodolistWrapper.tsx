"use client"
import React, { useState } from 'react';
import AddTask from './AddTask';
import Tasks from './Tasks';

// Define the Task interface
interface Task {
  id: number;
  text: string;
 }
 const TodolisatWrapper: React.FC = () => {
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
  return (
    <>
      <div className="text-center my-5 flex flex-col justify-center items-center gap-4 w-full">
        <h1 className="text-2xl font-bold">To Do List</h1>
        <AddTask onAddTask={addTask} />
      </div>
      <div className="text-center my-5 flex flex-col justify-center items-center gap-4 w-full">
        <Tasks
         tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />
      </div>
      </>
  );
}
export default TodolisatWrapper