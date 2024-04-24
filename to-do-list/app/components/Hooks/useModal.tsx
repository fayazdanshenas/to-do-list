
  // useModal.ts
  import { useState } from "react";
  import { UseModalReturn, ModalType } from "../taskTypes/taskTypes";
  
  export default function useModal(initialTaskValue = ''): UseModalReturn {
   const [modalOpen, setModalOpen] = useState(false);
   const [modalType, setModalType] = useState<ModalType>('delete');
   const [editTaskValue, setEditTaskValue] = useState(initialTaskValue);
  
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