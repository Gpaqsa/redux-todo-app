import Todo from "./Todo.jsx";

const TodoList = ({ todos, onToggle, onDelete }) => {
    console.log(todos)
  return (
      <ul className="todo-list">
        {todos.map((todo, index) => (
            <Todo key={index} todo={todo} onToggle={onToggle} onDelete={onDelete}/>
           ))
        }
      </ul>
  );
};

export default TodoList;
