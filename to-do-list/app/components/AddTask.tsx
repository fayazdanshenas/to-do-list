import React, { useState, FormEventHandler } from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
interface AddTaskProps {
 onAddTask: (task: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
 const [open, setOpen] = useState<boolean>(false);
 const [newTaskValue, setNewTaskValue] = useState<string>('');

 const toggleOpen = () => setOpen(!open);

 const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onAddTask(newTaskValue);
    setNewTaskValue("");
    toggleOpen();
 };

 return (
    <>
      <Button onClick={toggleOpen} variant="gradient" className="rounded-lg border-2 border-blue-300 bg-blue-500 w-6/12 p-2.5">
        Add new task
      </Button>
      <Modal
        open={open}
        onClose={toggleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex  w-full justify-center items-center h-screen"
      >
        <Box className="flex rounded-lg bg-white justify-center items-center flex-col w-1/3 h-1/3">
          <Typography id="modal-modal-title"  className="flex w-full h-1/3 text-xl border-b-2 pl-4 border-black items-center">
            Add new task
          </Typography>
          <form onSubmit={handleSubmitNewTodo} className='w-full flex justify-between h-3/4 items-center pl-2 pr-2'>
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-2/3 border-2 border-gray-300 rounded-lg h-1/3"
            />
            <div>
            <button type="submit" className="p-2 mr-2 border-2 rounded-lg border-blue-700 bg-blue-700 text-white" >
              Submit
            </button>
            <button type="button" className="p-2 rounded-lg border-2 border-gray-300 " onClick={toggleOpen}>
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