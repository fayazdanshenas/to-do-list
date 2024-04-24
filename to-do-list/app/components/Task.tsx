import React from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import {Button} from "@material-tailwind/react";
import {TaskProps} from './taskTypes/taskTypes';
import  useModal from './Hooks/useModal';
import ModalComponent from "./ModalComponent";

const Task: React.FC<TaskProps> = ({ task , onEditTask, onDeleteTask}) => {
  const {
    modalOpen,
    modalType,
    handleOpenModal,
    handleCloseModal,
 } = useModal(task.text);
 
  return (
    <>
      <li className="bg-gray-300 mb-3 rounded-lg border-2 flex justify-between p-2">
        {task.text}
        <div>
          <Button
            onClick={() => handleOpenModal("edit")}
            className="bg-inherit text-blue-500 pr-2"
          >
            <PencilIcon className="w-6 h-6" />
          </Button>
          <Button
           onClick={() => handleOpenModal("delete")}
            className="bg-inherit text-pink-800"
          >
            <TrashIcon className="w-6 h-6" />
          </Button>
        </div>
      </li>
      {modalOpen && (
        <ModalComponent 
          task={task} 
          modalOpen={modalOpen}
          modalType={modalType}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          handleCloseModal={handleCloseModal}
           />
      )}
    </>
  );
};

export default Task;
