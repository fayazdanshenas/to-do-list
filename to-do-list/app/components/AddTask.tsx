import React, { useState, FormEventHandler } from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

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
      <Dialog open={open} handler={toggleOpen} className="bg-orange-500 flex flex-col items-center justify-center w-1/3 h-1/3">
        <DialogHeader>Add new task</DialogHeader>
        <DialogBody>
          <form onSubmit={handleSubmitNewTodo}>
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </form>
        </DialogBody>
        <DialogFooter>
          <button type="submit" className="btn" onClick={handleSubmitNewTodo}>
            Submit
          </button>
          <button type="button" className="btn" onClick={toggleOpen}>
            Cancel
          </button>
        </DialogFooter>
      </Dialog>
    </>
 );
};

export default AddTask;