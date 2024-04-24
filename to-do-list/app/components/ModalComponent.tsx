import React, {MouseEventHandler,useCallback } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { toast } from 'react-toastify';
import {ModalProps} from './taskTypes/taskTypes'
import useModal from './Hooks/useModal'

const ModalComponent: React.FC<ModalProps> = ({ task, modalOpen,modalType, onDeleteTask, onEditTask, handleCloseModal }) => {
 const {
    editTaskValue,
    setEditTaskValue,
 } = useModal(task.text); 
 
 const handleSubmitTask: MouseEventHandler<HTMLButtonElement> = useCallback((e, actionType) => {
    e.preventDefault();
    if (actionType === "delete") {
      onDeleteTask(task.id);
    } else if (actionType === "edit") {
      if(!editTaskValue.trim()) {
        toast.warning('Please enter a value for input');
      } else {
        onEditTask(task.id, editTaskValue);
      }
    }
    handleCloseModal();
 }, [onDeleteTask, onEditTask, task.id, editTaskValue, handleCloseModal]);;

  return (
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex w-full justify-center items-center h-screen"
        >
          <Box className="flex rounded-lg bg-white justify-center items-center flex-col md:w-1/3 md:h-1/3 w-11/12 h-2/5">
              <Typography
                id="modal-modal-title"
                className={`"flex w-full text-xl" ${modalType === "delete" ? "items-center justify-center h-2/3 text-center" : " h-1/3 border-b-2 pl-4 border-black items-center"}`}
              >
                {modalType === "delete" ? "Are you sure, you want to delete this task?" : "Edit your task"}
              </Typography>
            <form
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
                  onClick={(e) => handleSubmitTask(e, modalType)}
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
  );
};

export default ModalComponent;
