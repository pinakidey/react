import React from "react";
import {Todo} from "../models/todo.model";
import "./../App.css"

interface TodoListProps {
    items: Todo[],
    onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return <ul className="todo-list">
        {props.items.map(todo => 
        <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => props.onDelete(todo.id)}>DELETE</button>
        </li>)}
    </ul>;
}

export default TodoList;