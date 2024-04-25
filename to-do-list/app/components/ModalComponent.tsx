import React, { MouseEventHandler, useCallback } from "react";
import { toast } from "react-toastify";
import { ModalProps, Task, ModalType } from "../types/taskTypes";
import useModal from "../hooks/useModal";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };
const ModalComponent: React.FC<ModalProps> = ({
  task = {},
  modalOpen,
  modalType,
  onDeleteTask = () => {},
  onEditTask = () => {},
  onAddTask = () => {},
  handleCloseModal,
}) => {
  const { editTaskValue, setEditTaskValue } = useModal();
  const taskId = task && (task as Task).id;

  const handleSubmitTask: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();
      if (modalType === "delete") {
        onDeleteTask(taskId);
      } else if (modalType === "edit" || modalType === "new") {
        if (!editTaskValue.trim()) {
          toast.warning("Please enter a value for input");
        } else {
          modalType === "new"
            ? onAddTask(editTaskValue)
            : onEditTask(taskId, editTaskValue);
          handleCloseModal();
        }
      }
    },
    [editTaskValue, handleCloseModal, onAddTask, onDeleteTask, onEditTask, taskId, modalType]
  );

  return (
    <Dialog open={modalOpen} onClose={handleCloseModal} maxWidth="sm" fullWidth>
      <DialogTitle>
        {modalType !== "delete"
          ? modalType === "new"
            ? "Add new task"
            : "Edit your task"
          : ""}
      </DialogTitle>
      <DialogContent>
        {modalType === "delete" && (
          <DialogContentText>
            Are you sure you want to delete this task?
          </DialogContentText>
        )}
        {modalType !== "delete" && (
          <Input
            className="w-full"
            defaultValue={(task as Task).text}
            placeholder="Type here"
            onChange={(e) => setEditTaskValue(e.target.value)}
            inputProps={ariaLabel}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmitTask}
          style={{
            backgroundColor: modalType === "delete" ? "#DC2626" : "",
            color: modalType === "delete" ? "white" : "",
          }}
        >
          {modalType === "delete" ? "Yes" : "Submit"}
        </Button>
        <Button variant="outlined" onClick={handleCloseModal}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalComponent;
