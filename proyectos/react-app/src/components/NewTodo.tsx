import React, { useRef } from "react";
import Task from "../interfaces/Task";
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'

interface NewTodoProps {
  onAddTodo: (task: Task) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const text = inputRef.current!.value;
    if (text) {
      onAddTodo({ id: Math.random().toString(), text });
      inputRef.current!.value = ""; 
    } else {
      alert("Por favor ingrese un texto para agregar la tarea");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormField>
        <label htmlFor="todo-text">Titulo</label>
        <input type="text" id="todo-text" ref={inputRef} />
      </FormField>
      <Button>Agregar</Button>
    </Form>
  );
};

export default NewTodo;
