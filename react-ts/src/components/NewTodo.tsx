import React, {useRef} from "react";
import "./../App.css"

interface NewTodoProps {
    onAdd: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const text = ref.current!.value;
        console.log(text);
        props.onAdd(text);      
    }
    return (
        <form className="form" onSubmit={todoSubmitHandler}>
            <div className="input">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={ref}></input>
            </div>
            <button type="submit">ADD</button>
        </form>
    )
}

export default NewTodo;