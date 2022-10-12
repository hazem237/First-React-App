import React from 'react'

const Form = () => {
    return (
        <form className='form-control '>
            <div className='form-container'>
                <label>
                    Task name :
                </label>
                <input type='text' placeholder='Task name' ></input>
                <label>
                    Day:
                </label>
                <input type='text' placeholder='Day' ></input>
                <label>
                    Date :
                </label>
                <input type='date' placeholder='Date' ></input>
                <label>Reminder ?</label>
                <input type='checkbox'  ></input>
                <button className='btn form-button' type='submit'> Add Task</button>
            </div>
        </form>
    )
}

export default Form
