import React from 'react';
import { Todo } from "../model";
import { AiFillDelete } from "react-icons/ai";

interface Props{
    todo:Todo;
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const SingleDoneTodo=({todo,todos,setTodos}:Props) => {

  const handleDelete=(id:number)=>{
    setTodos(todos.filter((todo)=> todo.id !==id));
  }

  return (
    <form className="todos_single">
            <span className="todos__single--text">{todo.todo}</span>

            <span className="icon" onClick={()=>handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
    </form>
  )
}

export default SingleDoneTodo;