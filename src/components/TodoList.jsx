import Todo from "./Todo.jsx";

const TodoList = ({ todos, onToggle, onDelete }) => {
    console.log(todos)
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    onToggle={() => onToggle(index)}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </ul>
    );
};

export default TodoList;
