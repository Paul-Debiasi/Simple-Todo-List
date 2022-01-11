import React from 'react'

import Todo from './Todo'


export default function Todolist({todos,removeTodo, toggledTodos,editTodos}) {
if(todos.length)
    return (
        <div>
            {/* <TodoUl> */}
            {
         todos.map((todo)=>(
                <>
                
                <Todo 
                task={todo.task} 
                key={todo.id} 
                id={todo.id}  
                completed={todo.completed} 
                removeTodo={removeTodo}  
                toggledTodos={toggledTodos} 
                editTodos={editTodos}
      
                />
              </>      
            
            ) )
            }
            {/* </TodoUl> */}
        </div>
    )
    return null
}
