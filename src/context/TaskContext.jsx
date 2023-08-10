import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [error, setError] = useState('');

    const addTask = () => {
      if (newTask.trim() !== '') {
        setTasks([...tasks, newTask]);
        setError('');
      } else{
        setError('el campo no puede estar vacio');
      }
    };

    const deleteTask = (id) => {
      const newTask = [...tasks];
      newTask.splice(id, 1);
      setTasks(newTask);
    };

    return (
        <TaskContext.Provider value={ {
            tasks,
            setTasks,
            newTask,
            setNewTask,
            setError,
            addTask,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}