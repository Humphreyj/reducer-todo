import React, {useState, useEffect } from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
import './App.css';

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

  const [todos, updateTodos] =  useState({

    tasks: [
      {
        id:1,
        title: "Eat some Food",
        completed: false
      },
      {
        id:2,
        title: "Walk",
        completed: false
      },
    ]
  })

 const completedTextHandler = (itemId) => {
    
    updateTodos({
      ...todos,tasks: todos.tasks.map(item => {
        console.log(item)
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item
      })
    })
  }

 const addTask = (itemText) => {
    const newTask = {
      title: itemText,
      completed: false,
      id: Date.now()
    }

    updateTodos({
      todos,tasks: [...todos.tasks, newTask]
    })
  }

 const clearCompleted = () => {
    let filteredTodos = todos.tasks.filter(item => {
       return item.completed === false;
     })
 
     updateTodos({
       todos,tasks: [...filteredTodos]
     })
   }

  return (
    <AppWrap>
        <TodoList
        todoData={todos}
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
