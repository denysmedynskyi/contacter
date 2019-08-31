import React from 'react';
import Typography from "@material-ui/core/Typography";
import './App.css';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./useTodoState";

function App() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
