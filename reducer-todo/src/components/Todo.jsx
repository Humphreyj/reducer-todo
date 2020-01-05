import React from 'react';
import styled from 'styled-components';

const Todo = (props) => {

    const Todo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all ease 0.3s;
    `

    const Title = styled.h1`
    text-align: center;
    font-family: 'Solway', serif;
    
    `

    const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

    const Done = styled.button `
    margin: 0 auto;
    border: none;
    border-radius: 12px;
    padding: 3%;
    font-size: 1.1em;
    font-family: 'Bebas Neue', cursive;
    `
    
    return (
        <div>
            <Title className={`todo${props.completed ? " completed" : "" }`} >{props.title}</Title>
            <Buttons className="buttons">
                <Done onClick={e =>props.completedTextHandler(props.item.id)}>Done!</Done>
            </Buttons>
            
        </div>
    );
}

export default Todo;