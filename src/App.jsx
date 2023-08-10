import './App.css'
import ListTasks from './components/ListTasks';
import FormTasks from './components/FormTasks';
import { TaskProvider } from './context/TaskContext';
import ErrorTasks from './components/ErrorTasks';

function App() {

  return (
    <TaskProvider>
      <main className='task-container'> 
        <div className='task-wrapper'>
          <h2 className='task-title'>Lista de Tareas</h2>
          <FormTasks />
          <ErrorTasks />
          <ListTasks />
        </div>
      </main>
    </TaskProvider>
  )
};

export default App;
