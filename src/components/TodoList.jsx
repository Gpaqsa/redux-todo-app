import Todo from "./Todo.jsx";
import {useDispatch} from "react-redux";

const TodoList = ({data, setTodoData}) => {
  const dispatch = useDispatch();

  const toggleTodo = (id) => {
    setTodoData(
        data.map((todo) =>
            todo.id === id ? dispatch({type: "TOGGLE_TODO"}) : todo
        )
    );
  };

  const deleteTodo = (id) => {
    setTodoData(data.filter((todo) => todo.id !== id));
  };

  return (<ul className="todo-list">
      {data.map((todo)=>(
          <Todo todo={todo} key={todo.id} onToggle={toggleTodo} setTodoData={setTodoData} onDelete={deleteTodo}/>
      ))}

  </ul>)
}
export default  TodoList;