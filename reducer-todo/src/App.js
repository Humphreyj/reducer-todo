import React, {useState, useReducer } from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
import './App.css';

import { initialState, todoReducer } from './reducers/index'

function App() {
  const AppWrap =  styled.div
  `
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 8%;
  min-height: 16em;
  `

  const [todos, updateTodos] =  useState({})

  const [state, dispatch] = useReducer(todoReducer, initialState)

  console.log(state)

 const completedTextHandler = (itemId) => {
    
    // updateTodos({
    //   ...state,tasks: state.tasks.map(item => {
    //     console.log(item)
    //     if(itemId === item.id) {
    //       return {
    //         ...item,
    //         completed: !item.completed
    //       };
    //     }
    //     return item
    //   })
    // })

    dispatch({ type:'COMPLETE', payload: itemId })
  }

 const addTask = (itemText) => {
    const newTask = {
      title: itemText,
      completed: false,
      id: Date.now()
    }

    dispatch({ type: 'ADD_TODO', payload: newTask })

    // updateTodos({
    //   todos,tasks: [...todos.tasks, newTask]
    // })
  }

 const clearCompleted = () => {
    let filteredTodos = state.tasks.filter(item => {
       return item.completed === false;
     })
 
    //  updateTodos({
    //    state,tasks: [...filteredTodos]
    //  })

    dispatch({ type:'CLEAR',payload: filteredTodos })
   }

  return (
    <AppWrap>
        <TodoList
        todoData={state}
        completedTextHandler={completedTextHandler}
        />
        <TodoForm 
        addTask={addTask}
        clearCompleted={clearCompleted}
        />
        
      </AppWrap>
  );
}

export default App;
