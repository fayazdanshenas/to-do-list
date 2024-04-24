// TaskList.tsx
import React from "react";
import Task from "./Task";
import { TaskListProps} from "../components/taskTypes/taskTypes";


const TaskList: React.FC<TaskListProps> = ({ tasks, onEditTask, onDeleteTask }) => {
  return (
    <ul className="my-2 w-6/12">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
