import { useState } from 'react';
import { Task ,UseTaskManagerReturn} from '../types/taskTypes';

// Custom hook for managing tasks
export default function useTaskManager () : UseTaskManagerReturn {
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

