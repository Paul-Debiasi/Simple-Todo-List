import React from 'react'
import UseInputState from './UseInputState'
import styled from 'styled-components'

const FormDiv = styled.div`
height:80px;
background: #8eff00cf;
display:flex;
align-items: center;
justify-content: center;
width: 100%;
border-bottom: 2px solid black;
border-radius: 12px 12px 4px 4px;
margin-right: 5px;
`


const Input = styled.input`
display: inline-block;
width: 50%;
height: 35px;
border-top: none;
border-right: none;
border-left: none;
`

const Button = styled.button`
display: inline-block;
margin-left: 20px;
height: 40px;
width: 140px;
font-size: 20px;
border:none;
border-radius: 6px;
`
export default function EditTodoForm({editTodos,id,task,toggleEditing}) {
    const [value,handleChange,reset] =UseInputState(task)
      return (
        <FormDiv>
            <Input  type="text" value={value} onChange={handleChange}/>
            <Button  onClick={(e)=> {
                editTodos(id,value)
                reset()
                toggleEditing()
            }

      } type="submit">Edit</Button >
        </FormDiv>
    )
}
