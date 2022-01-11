import React from "react";
import UseInputState from "./UseInputState";
import styled from 'styled-components'
import './TodoForm.scss'

const FormDiv = styled.div`
height:80px;
background: yellow;
display:flex;
align-items: center;
justify-content: center;
width: 100%;
border-bottom: 2px solid black;
`

const Form = styled.form`
width:80%;
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

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = UseInputState("");
  return (
    <FormDiv>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          value && addTodo(value);
          console.log(value);
          reset();
        }}
      >
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Add new Task..."
        />
        <Button type="submit">Add Task</Button>
      </Form>
    </FormDiv>
  );
}
