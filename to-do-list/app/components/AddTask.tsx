import React from "react";
import { Button } from "@material-tailwind/react";
import ModalComponent from "./ModalComponent";
import useModal from "../hooks/useModal";
import { AddTaskProps } from "../types/taskTypes";

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const { modalOpen, modalType, handleOpenModal, handleCloseModal } =
    useModal();

  return (
    <>
      <Button
        onClick={() => handleOpenModal("new")}
        variant="gradient"
        className="rounded-lg border-2 border-blue-300 bg-blue-500 w-6/12 p-2.5"
      >
        Add new task
      </Button>
      {modalOpen && (
        <ModalComponent
          modalType={modalType}
          modalOpen={modalOpen}
          onAddTask={onAddTask}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default AddTask;
