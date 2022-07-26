import React from 'react';
import { Todo } from "../model";
import SingleTodo from './SingleTodo';
import SingleDoneTodo from "./SingleDoneTodo";

interface Props{
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}
const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className="container">
        <div className="todos">
            <span className="todos_heading">Active Tasks</span>
            {todos.map((todo)=>(
                todo.isDone===false ?
                (<SingleTodo todo={todo} key={todo.id}
                todos={todos}
                setTodos={setTodos}/>):null
            ))}
        </div>

        <div className="todos-remove">
            <span className="todos_heading">Completed Tasks</span>
            {todos.map((todo)=>(
                todo.isDone===true
                ? (<SingleDoneTodo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />)
                : null 
            ))}
        </div>
    </div>
  )
}

export default TodoList