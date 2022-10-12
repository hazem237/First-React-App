import React, { useState } from 'react'

const Form = ({ AddTask }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const submitTask = (event) => {
        event.preventDefault();
        if (!text) {
            alert("please enter the Task")
            return
        }

        AddTask({ text, day , reminder });
        setText('')
        setDay('')
        setReminder('')
    }
    return (
        <form className='form-control ' onSubmit={submitTask}>
            <div className='form-container'>
                <label>
                    Task name :
                </label>
                <input type='text' placeholder='Task name' value={text} onChange={(e) => setText(e.target.value)} ></input>
                <label>
                    Day && Date :
                </label>
                <input type='date' placeholder='Date' value={day} onChange={(e) => setDay(e.target.value)}></input>
                <label>Reminder ?</label>
                <input type='checkbox' value={reminder} checked={reminder} onChange={(e) => setReminder(e.target.checked)} ></input>
                <button className='btn form-button' type='submit' > Add Task</button>
            </div>
        </form>
    )
}

export default Form
