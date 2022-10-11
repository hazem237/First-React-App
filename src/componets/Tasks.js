import Task from './Task'

const Tasks = ({ tasks , ondelete}) => {
    return (
        <>
            {tasks.map((t) => (
                <Task task={t} key={t.id} ondelete={ondelete}/>
            ))}
        </>
    )
}

export default Tasks
