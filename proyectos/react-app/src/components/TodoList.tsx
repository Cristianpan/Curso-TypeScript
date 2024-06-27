import React from "react";
import Task from "../interfaces/Task";
import { ListItem, List, Icon, Button } from "semantic-ui-react";

interface TodoListProps {
  tasks: Task[];
  deleteTask: (taskId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, deleteTask }) => {
  return (
    <List>
      {tasks.map((item) => (
        <ListItem key={item.id}>
          <Button
            type="button"
            onClick={() => deleteTask(item.id)}
            circular
            size="mini"
            icon
          >
            <Icon color="red" name="cancel" />
          </Button>
          {item.text}
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
