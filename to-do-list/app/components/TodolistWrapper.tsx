"use client"
import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import useTaskManager from './hooks/useTaskManager'


const TodolistWrapper: React.FC = () => {
  const { tasks, addTask, editTask, deleteTask } = useTaskManager();

  return (
    <>
      <div className="text-center my-5 flex flex-col justify-center items-center gap-4 w-full">
        <h1 className="text-2xl font-bold">To Do List</h1>
        <AddTask onAddTask={addTask} />
      </div>
      <div className="text-center my-5 flex flex-col justify-center items-center gap-4 w-full">
        <TaskList tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />
      </div>
    </>
  );
}
export default TodolistWrapper