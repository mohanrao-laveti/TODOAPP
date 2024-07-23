import { useDispatch} from "react-redux";
import { addTodo } from "./actions";
import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css"
function App() {
  const dispatch = useDispatch();

  const [todoTitle, setTodoTitle] = useState("");
  const handleTodo = () => {
    if (todoTitle.trim()) {
      const newTodo = {
        title: todoTitle,
      };
      dispatch(addTodo(newTodo));
      setTodoTitle("");
    }
  };
  function Fun(e){
      if(e.key==="Enter"){
            handleTodo();
      }
  }

  return (
    <div className="c" onKeyDown={(e)=>{Fun(e)}
    }>
      <h3  id="s">Todo app using  react</h3>
      <div className="in">
        <input
          type="text" 
          className="i"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button className="f" onClick={() => handleTodo()}>
          Add
        </button>
      </div><div id="q">
      <TodoList />
    </div></div>
  );
}

export default App;