
const Task = ({ task, d, reminder }) => {

 

    return (
        <div className="task"  onDoubleClick={()=> reminder(task.id)}>
            <h3>{task.text} <button className="btn-cansel"
                onClick={()=> d(task.id)}
            >Delete</button></h3>
            <p>{task.day}  {task.date}</p>
        </div>
    )
}

export default Task
