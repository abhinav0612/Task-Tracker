import {FaTimes} from 'react-icons/fa'

const Task = ({task, deleteTask, toggleReminder}) => {
    return(
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
            <h3>{task.title}
            <FaTimes 
                style={{color:"red"}} 
                onClick={() => deleteTask(task.id)}
            />
            </h3>
        </div>
    )
}

export default Task;