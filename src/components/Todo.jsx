import { useState } from "react";
import "./css/Todo.css";
import { useRef } from "react";
import { useEffect } from "react";
import TodoItems from "./TodoItems";
import logo from "../../public/logo.svg";

let count = 0;

const Todo = () => {
  const [todolist, setTodolist] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodolist([
      ...todolist,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todo_count", count);
  };

  useEffect(() => {
    setTodolist(JSON.parse(localStorage.getItem("todolist")));
    count = localStorage.getItem("todo_count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todolist);
      localStorage.setItem("todolist", JSON.stringify(todolist));
    }, 100);
  }, [todolist]);

  return (
    <div className="todo">
      <div className="todo-header">
        <img className="logo" src={logo} alt="" />
        To Do List
      </div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add Your Task"
          className="todo-input"
        />
        <div
          onClick={() => {
            {
              add();
            }
          }}
          className="todo-add-btn"
        >
          Add
        </div>
      </div>
      <div className="todo-list">
        {todolist.map((item, index) => {
          return (
            <TodoItems
              key={index}
              setTodolist={setTodolist}
              no={item.no}
              display={item.display}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
