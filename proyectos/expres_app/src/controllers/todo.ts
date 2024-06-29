import { RequestHandler } from "express";
import { Todo } from "../model/todo";
import { stringify } from "querystring";

const todos: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const { text } = req.body as { text: string };
  const newTodo = new Todo(Math.random().toString(), text);
  todos.push(newTodo);

  res.json({ message: "La tarea ha sido creada", body: newTodo }).status(201);
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json(todos).status(200);
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id: taskId } = req.params;

  const { text: updatedText } = req.body as { text: string };

  const index = todos.findIndex((todo) => todo.id == taskId);

  if (!index) {
    throw new Error("La tarea no ha sido encontrada");
  }

  todos[index] = new Todo(todos[index].id, updatedText);

  res.json({ message: "Actualizado", updateTodo: todos[index] }).status(201);
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id: taskId } = req.params;

  const index = todos.findIndex((todo) => todo.id == taskId);

  if (!index) {
    throw new Error("La tarea no ha sido encontrada");
  }

  todos.splice(index, 1);

  res.json({ message: "Eliminado" });
};
