import {useState} from 'react'

const AddTaskForm = ({addTask}) => {

    const [title, setTitle] = useState('');
    const [reminder, setReminder] = useState(false);

    const submitForm = (e) => {
        e.preventDefault()
        
        if(!title){
            alert('Please Add Title');
            return;
        }

        // Alternate Method

        // var id = Math.floor(Math.random() *1000) + 1
        // addTask({
        //     "id":id,
        //     "title": title,
        //     "reminder":reminder
        // })

        addTask({title, reminder})
        setTitle('')
        setReminder(false)

    }

    return(
        <form className="add-form"  onSubmit={submitForm} > 
            <div className="form-control">
                <label>Task Title</label>
                <input type="text" placeholder="Add task title..." onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox" onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Submit Task" className="btn btn-block"/>

        </form>
    )
}

export default AddTaskForm;