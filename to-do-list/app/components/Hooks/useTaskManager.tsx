import { useState } from 'react';
import { Task } from '../taskTypes/taskTypes';

// Custom hook for managing tasks
const useTaskManager = () => {
 const [tasks, setTasks] = useState<Task[]>([]);

 const addTask = (task: string) => {
    setTasks([...tasks, { id: Date.now(), text: task }]);
 };

 const editTask = (id: number, newText: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
 };

 const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
 };

 return { tasks, addTask, editTask, deleteTask };
};

export default useTaskManager;