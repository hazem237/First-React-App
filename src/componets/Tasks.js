import Task from './Task'

const Tasks = ({ tasks, onDeleteClick, remind }) => {

    return (
        <>
            {tasks.map((t) => (
                <Task task={t} key={t.id} d={onDeleteClick} reminder={remind} />
            ))}
        </>
    )
}

export default Tasks
