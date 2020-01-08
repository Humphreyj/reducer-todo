import React,{ useState } from 'react';
import styled from 'styled-components';
import './Todo.css';

const TodoForm = (props) => {

    const [itemText,updateItemText] = useState('');
    
    const changeHandler = (event) => {
        updateItemText(event.target.value)
        console.log(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        if(itemText === '') {
            alert('Add a title for your task!')
        }else {
            props.addTask(itemText)
            updateItemText('');
        }
        
    }

   

        const AddTask = styled.button`
        margin-top: 3%;
        padding: 3%;
        font-size: .9em;
        width: 100%;
        font-family: 'Solway', serif;
        `

        const ClearTasks = styled.button `
        margin-top: 3%;
        padding: 3%;
        font-size: .9em;
        width: 100%;
        `

    return (
        <div className='formDiv'>
                <form onSubmit={submitHandler}>
                <input 
                type="text" 
                name='itemText' 
                value={itemText} 
                placeholder='Add a task!'
                onChange={changeHandler}
                />
                <AddTask type='submit' className="submit">Add task!</AddTask>
                </form>
                <ClearTasks 
                className="clearCompleted"
                onClick={props.clearCompleted}
                >Clear Completed Tasks</ClearTasks>
            </div>
    );
}

export default TodoForm;
