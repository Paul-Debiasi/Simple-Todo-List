import { useState, useEffect} from 'react'
import styled from 'styled-components'
import{AiOutlineEdit} from 'react-icons/ai'
import UseToggleState from './UseToggleState'
import EditTodoForm from './EditTodoForm'

const DivTodo = styled.div`
display:flex;
margin-top: 22px;
width: 100%;
padding:12px;
background: #000000bf;
`

const PTasks = styled.p`
width:60%;
font-size:1.3rem;
color: white;
`


const Button = styled.button`
height:40px;
width: 150px;
margin-right: 10px;
font-size:22px;
border-radius: 6px;
border: none;
cursor: pointer;
outline: inherit;
background-color: ${props => props.bgColor };
color:${props => props.color };
`
export default function Todo({id, task, completed, removeTodo,toggledTodos,editTodos}) {
    // const [done,setDone] = useState(completed)
   
    // const handleClick = () =>{
    //     setDone(!done)
               
    // }

const [isEditing,toggle] = UseToggleState()

    return (
        <DivTodo>
            {
                isEditing? <EditTodoForm    
                editTodos={editTodos}
                id={id}
                task={task}
                toggleEditing={toggle}
                />:
            <>
          <PTasks style={{textDecoration: completed? 'line-through' : 'none'}}>{task}</PTasks>
          <Button onClick={()=> removeTodo(id)}>Delete</Button>
         
             <Button color='white' onClick={()=> {
                 toggledTodos(id)
            
                 }}  bgColor={completed? 'green' : 'red'}>{completed ? 'Done': 'Set done'}</Button>
            
          <AiOutlineEdit onClick={toggle} style={{fontSize:'24px',height:'40px', marginRight:'20px', color:'white'}}/>          
               </> 
                }  

        </DivTodo>

    )
}
