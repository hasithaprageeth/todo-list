import "./css/TodoItems.css";
import tick from "./assets/tick.png";
import not_tick from "./assets/not_tick.png";
import cross from "./assets/cross.png";

const TodoItems = ({ setTodolist, no, display, text }) => {
  const remove = (no) => {
    let data = JSON.parse(localStorage.getItem("todolist"));
    data = data.filter((todo) => todo.no !== no);
    setTodolist(data);
  };

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todolist"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodolist(data);
  };

  return (
    <div className="todoitems">
      <div
        onClick={() => {
          toggle(no);
        }}
        className={`todoitems-container ${display}`}
      >
        {display === "" ? (
          <img src={not_tick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}

        <div className="todoitems-text">{text}</div>
      </div>
      <img
        onClick={() => {
          remove(no);
        }}
        className="todoitems-cross-icon"
        src={cross}
        alt=""
      />
    </div>
  );
};

export default TodoItems;
