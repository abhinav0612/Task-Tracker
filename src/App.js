import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTaskForm from './components/AddTaskForm';
import {useState} from 'react';
import styled, {ThemeProvidder} from 'styled-components';
import {FaMoon, FaLightbulb} from 'react-icons/fa'
import './themes'

function App() {

  const [tasks, setTasks] = useState([
    {
      id:1,
      title: "First Task",
      reminder: false
    },
    {
      id:2,
      title: "Second Task",
      reminder: false
    }
  ])

  const [showForm, setShowForm] = useState(false);
  const deleteTask = (id) => {
      setTasks(tasks.filter(task=>
        task.id !== id
      ))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task=> 
      task.id === id ? {...task, reminder:!task.reminder} : task
    ))
  }

  const toggleShowForm = () => {
    setShowForm(!showForm)
  }

  const addTask = (task) => {
      console.log(task)
      var id = Math.floor(Math.random() *1000) + 1
      const newTask = {...task, id: id}
      setTasks([...tasks, newTask])
      setShowForm(false);
  }

  return (
    <div className='container'>
      <FaLightbulb style={{color:"yellow", float:"right"}} /> <FaMoon style={{color:"purple"}} />
     <Header title={"Tasks Tracker"} toggleShowForm={toggleShowForm} showForm={showForm}/>
     {showForm && <AddTaskForm addTask={addTask}/>}
     <Tasks tasks={tasks} deleteTask = {deleteTask} toggleReminder={toggleReminder} />
    </div>
  );
}

export default App;
