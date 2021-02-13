import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from "./models/todo.model";
import "./App.css"

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    console.log(text);
    setTodos([...todos, {id: Math.random().toString(), text: text}]);
  }
  const todoDeleteHandler = (id: string) => {
    setTodos(todos.filter(item => item.id!==id));
  }
  return (
    <div className="App">
      <NewTodo onAdd={todoAddHandler}/>
      <TodoList items={todos} onDelete={todoDeleteHandler}/>
    </div>
  );
}

export default App;
