
const Task = ({ task, d, reminder }) => {

 

    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}  onDoubleClick={()=> reminder(task.id)}>
            <h3 className="Task-Name">{task.text} <button className="btn-cansel"
                onClick={()=> d(task.id)}
            >Delete</button></h3>
            <p>{task.day}  {task.date}</p>
            <small><i>Double click if you want to set a reminder</i></small>
        </div>
    )
}

export default Task
