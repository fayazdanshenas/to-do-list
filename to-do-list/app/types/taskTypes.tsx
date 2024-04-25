// Define the Task type
export type Task = {
  id: number;
  text: string;
};

export interface TaskListProps {
  tasks: Task[];
  onEditTask: (id: number, newText: string) => void;
  onDeleteTask: (id: number) => void;
}

export interface AddTaskProps {
  onAddTask: (task: string) => void;
}
export interface TaskProps {
  task: Task;
  onEditTask: (id: number, newText: string) => void;
  onDeleteTask: (id: number) => void;
}
export interface UseTaskManagerReturn {
  tasks:Task[];
  addTask: (newText: string) => void;
  editTask: (id: number, newText: string) => void;
  deleteTask: (id: number) => void;
}

export type ModalType = "delete" | "edit" | "new";

export interface UseModalReturn {
  modalOpen: boolean;
  modalType: ModalType;
  editTaskValue: string;
  setEditTaskValue: React.Dispatch<React.SetStateAction<string>>;
  handleOpenModal: (type: ModalType) => void;
  handleCloseModal: () => void;
}

export interface ModalProps {
  task?: Task;
  modalType: ModalType;
  modalOpen: boolean;
  onEditTask?: (id: number, newText: string) => void ;
  onDeleteTask?: (id: number) => void ;
  onAddTask?: (newText: string) => void ;
  handleCloseModal: () => void;
}
