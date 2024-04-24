import React, { useState, FormEventHandler } from "react";
import { Button } from "@material-tailwind/react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { toast } from 'react-toastify';
interface AddTaskProps {
  onAddTask: (task: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

 const handleOpenModal = () => {
    setOpenModal(!openModal)
  };

  const handleCloseModal = () => {
    setOpenModal(!openModal)
    setNewTaskValue("")

  };

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if(newTaskValue === "" || !newTaskValue){
      toast.warning('Please enter a value for input');
    } else {
    onAddTask(newTaskValue);
    setNewTaskValue("");
    handleCloseModal();
    }
  };

  return (
    <>
      <Button
        onClick={handleOpenModal}
        variant="gradient"
        className="rounded-lg border-2 border-blue-300 bg-blue-500 w-6/12 p-2.5"
      >
        Add new task
      </Button>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex w-full justify-center items-center h-screen"
      >
        <Box className="flex rounded-lg bg-white justify-center items-center flex-col md:w-1/3 md:h-1/3 w-11/12 h-2/5">
          <Typography
            id="modal-modal-title"
            className="flex w-full h-1/3 text-xl border-b-2 pl-4 border-black items-center"
          >
            Add new task
          </Typography>
          <form
            onSubmit={handleSubmitNewTodo}
            className="w-full flex flex-col h-3/4 items-center p-4 justify-between"
          >
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full border-2 border-gray-300 rounded-lg h-1/3 pl-2 focus:border-gray-300 focus:outline-none"
            />
            <div>
              <button
                type="submit"
                className="p-2 mr-2 border-2 rounded-lg border-black bg-gray-800 text-white w-20"
              >
                Submit
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
    </>
  );
};

export default AddTask;
