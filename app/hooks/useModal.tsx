import { useState } from "react";
import { ModalType, UseModalReturn } from "../types/taskTypes";

export default function useModal(): UseModalReturn {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>('delete');
  const [editTaskValue, setEditTaskValue] = useState<string>('');

  const handleOpenModal = (type: ModalType) => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditTaskValue('');
  };

  return {
    modalOpen,
    modalType,
    editTaskValue,
    setEditTaskValue,
    handleOpenModal,
    handleCloseModal,
  };
}