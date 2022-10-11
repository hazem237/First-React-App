
const Task = ({ task, ondelete }) => {
    return (
        <div className="task">
            <h3>{task.text} <button className="btn-cansel" onClick={ondelete}
            >Delete</button></h3>
            <p>{task.day}  {task.date}</p>
        </div>
    )
}

export default Task
