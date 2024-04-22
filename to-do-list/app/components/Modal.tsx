interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    children: React.ReactNode;
   }
   
   const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
    // if (!modalOpen) return null;
   
    return (
       <div className="">
         <div >
           {children}
           <button className='btn btn-sm btn-circle absolute right-2 top-2' onClick={() => setModalOpen(false)}>Close</button>
         </div>
       </div>
    );
   };
   export default Modal;