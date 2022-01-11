import {useState,useEffect} from "react";
import styled from 'styled-components'
import Todolist from './Todolist'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';


const TodoContainer = styled.div`
padding: 0;
margin: O;
height: 100%;
background-color: #fafafa;
`


export default function TodoApp() {
    const initalTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
    // const initial = [

    //     {
    //         id:1, task: 'Clean Fishtank', completed: true
    //     },
    //     {
    //         id:2, task: 'Wash Dishes', completed: true
    //     },
    //     {
    //         id:3, task: 'Cut Plants', completed: false
    //     }
    // ]
    const [todos,setTodos] = useState(initalTodos);

    useEffect(()=>{
window.localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const addTodo = newTodoText =>{

        setTodos([...todos, {id:uuidv4(), task:newTodoText, completed:false}])
    }
    const removeTodo = todoId =>{

        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos)
    
    }
    const toggledTodos = todoId =>{
        const updatedTodos = todos.map(todo=>
            todo.id === todoId ? {...todo, completed: !todo.completed} :todo
            )

            setTodos(updatedTodos)
    }

    const editTodos = (todoId,newTask) =>{
        const updatedTodos = todos.map(todo=>
            todo.id === todoId ? {...todo, task:newTask} :todo
            )

            setTodos(updatedTodos)
    }
  return <TodoContainer>
 <TodoForm addTodo={addTodo}/>
      <Todolist 
      todos={todos} 
      removeTodo={removeTodo} 
      toggledTodos={toggledTodos}
      editTodos={editTodos}
      />
  </TodoContainer>;
}
