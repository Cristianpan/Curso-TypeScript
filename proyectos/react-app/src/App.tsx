import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import Task from "./interfaces/Task";
import "semantic-ui-css/semantic.min.css";

const App: React.FC = () => {
  const [tasks, setTask] = useState<Array<Task>>([]);

  const addTask = (task: Task): void => {
    setTask([...tasks, task]);
  };

  const deleteTask = (taskId: string): void => {
    setTask(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
