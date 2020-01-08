import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';



const NoTasks = styled.h1`
margin-top: 30%:
vertical-align:middle;
`

const TodoList = (props) => {

   
    console.log(props.todoData)
    return (
        <div>
            {
               props.todoData.tasks.length === 0 ? <NoTasks>You have no current Tasks!</NoTasks> : props.todoData.tasks.map(item => {
                    
                    return (
                        <Todo
                        item={item}
                        key ={item.id} 
                        title={item.title}
                        completed ={item.completed}
                        completedTextHandler={props.completedTextHandler}
                        />
                    )
                })
             
            }
            
        </div>
    );
}

export default TodoList;