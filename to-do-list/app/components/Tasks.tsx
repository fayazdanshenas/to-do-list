import React, { useState, FormEventHandler } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import {
  Button,
} from "@material-tailwind/react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { toast } from 'react-toastify';

interface Task {
  id: number;
  text: string;
}

interface TaskProps {
  tasks: Task[];
  onEditTask: (id: number, newText: string) => void;
  onDeleteTask: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ tasks, onEditTask, onDeleteTask }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"delete" | "edit">("delete");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [editTaskValue, setEditTaskValue] = useState<string>("");

  const handleOpenModal = (type: "delete" | "edit", task: Task) => {
    setModalType(type);
    setSelectedTask(task);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTask(null);
    setEditTaskValue("");
  };

  const handleSubmitDeleteTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (selectedTask) {
      onDeleteTask(selectedTask.id);
    }
    handleCloseModal();
  };

  const handleSubmitEditTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if(editTaskValue === "" || !editTaskValue) {
      toast.warning('You should input a value');
    } else {
       onEditTask(selectedTask.id, editTaskValue) ;
       handleCloseModal();
    }

  };

  return (
    <>
      <ul className="my-2 w-6/12">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="bg-gray-300 mb-3 rounded-lg border-2 flex justify-between p-2"
          >
            {task.text}
            <div>
              <Button
                onClick={() => handleOpenModal("edit", task)}
                className="bg-inherit text-blue-500 pr-2"
              >
                <PencilIcon className="w-6 h-6" />
              </Button>
              <Button
                onClick={() => handleOpenModal("delete", task)}
                className="bg-inherit text-pink-800"
              >
                <TrashIcon className="w-6 h-6" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      {modalOpen && (
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex w-full justify-center items-center h-screen"
        >
          <Box className="flex rounded-lg bg-white justify-center items-center flex-col md:w-1/3 md:h-1/3 w-11/12 h-2/5">
            {modalType === "delete" ? (
              <Typography
                id="modal-modal-title"
                className="flex w-full text-xl items-center justify-center h-2/3 text-center"
              >
                Are you sure, you want to delete this task?
              </Typography>
            ) : (
              <Typography
                id="modal-modal-title"
                className="flex w-full h-1/3 text-xl border-b-2 pl-4 border-black items-center"
              >
                Edit your task
              </Typography>
            )}
            <form
              onSubmit={handleSubmitEditTask}
              className="w-full flex flex-col h-3/4 items-center p-4 justify-between"
            >
              {modalType !== "delete" && (
                <input
                  value={editTaskValue}
                  onChange={(e) => setEditTaskValue(e.target.value)}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full border-2 border-gray-300 rounded-lg h-1/3 pl-2 focus:border-gray-300 focus:outline-none"
                />
              )}
              <div>
                <button
                  type="submit"
                  className="p-2 mr-2 border-2 rounded-lg border-black bg-gray-800 text-white w-20"
                  onClick={
                    modalType === "delete"
                      ? handleSubmitDeleteTask
                      : handleSubmitEditTask
                  }
                >
                  {modalType === "delete" ? "Yes" : "Submit"}
                </button>
                <button
                  type="button"
                  className="p-2 rounded-lg border-2 border-gray-300 w-20"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default Task;
