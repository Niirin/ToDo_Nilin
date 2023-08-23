import { useState } from 'react'
import TaskCreate from'./components/TaskCreate';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTaskById= (id) => {
    const updatedTasks = tasks.filter((task)=> {
      return task.id !== id; 
    });
    setTasks(updatedTasks);
  }

  const createTask = (task) => {
    const updatedTasks = [
      ...tasks, {id: Math.round(Math.random()* 9999), title:task}
    ];
    setTasks(updatedTasks);
  };

  return (
    <>
    <div className='title'>
            <h1>ToDo List</h1>
            <p>You have {tasks.length} tasks</p>
      </div>
      <section> 
        <TaskCreate onCreate={createTask} />
      </section>
      <section>
        <TaskList tasks={tasks} onDelete={deleteTaskById} />
      </section>
    </>
  )
}

export default App
