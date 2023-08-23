import { useState } from 'react'
import TaskCreate from'./components/TaskCreate';


function App() {
  const [tasks, setTasks] = useState([]);

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

    </>
  )
}

export default App
