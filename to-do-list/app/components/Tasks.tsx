import React, { useState, FormEventHandler } from "react";
import { TrashIcon, PencilIcon } from '@heroicons/react/solid';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

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
 const [modalType, setModalType] = useState<'delete' | 'edit'>('delete');
 const [selectedTask, setSelectedTask] = useState<Task | null>(null);
 const [editTaskValue, setEditTaskValue] = useState<string>('');

 const handleOpenModal = (type: 'delete' | 'edit', task: Task) => {
    setModalType(type);
    setSelectedTask(task);
    setModalOpen(true);
 };

 const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTask(null);
    setEditTaskValue('');
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
    if (selectedTask) {
      onEditTask(selectedTask.id, editTaskValue);
    }
    handleCloseModal();
 };

 return (
    <>
      <ul className="my-2 w-6/12">
        {tasks.map((task) => (
          <li key={task.id}  className="bg-gray-300 mb-3 rounded-lg border-2 flex justify-between p-2">
            {task.text}
            <div>
            <Button  onClick={() => handleOpenModal('edit', task)} className="bg-inherit text-blue-500 pr-2">
              <PencilIcon className="w-6 h-6" />
            </Button>
            <Button  onClick={() => handleOpenModal('delete', task)} className="bg-inherit text-pink-800">
              <TrashIcon className="w-6 h-6" />
            </Button>
            </div>
          </li>
        ))}
      </ul>
      {modalOpen && (
        <Dialog open={modalOpen} handler={handleCloseModal} className="bg-orange-500 flex flex-col items-center justify-center w-1/3 h-1/3">
          <DialogHeader>{modalType === 'delete' ? 'Delete Task' : 'Edit Task'}</DialogHeader>
          <DialogBody>
            {modalType === 'delete' ? (
              <h3 className='text-lg'>Are you sure, you want to delete this task?</h3>
            ) : (
              <form onSubmit={handleSubmitEditTask}>
                <input
                 value={editTaskValue}
                 onChange={(e) => setEditTaskValue(e.target.value)}
                 type="text"
                 placeholder="Type here"
                 className="input input-bordered w-full"
                />
              </form>
            )}
          </DialogBody>
          <DialogFooter>
            <button type="submit" className="btn" onClick={modalType === 'delete' ? handleSubmitDeleteTask : handleSubmitEditTask}>
              {modalType === 'delete' ? 'Yes' : 'Submit'}
            </button>
            <button type="button" className="btn" onClick={handleCloseModal}>
              Cancel
            </button>
          </DialogFooter>
        </Dialog>
      )}
    </>
 );
};

export default Task;