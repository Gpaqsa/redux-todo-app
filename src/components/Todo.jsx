const Todo = ({ index, todo, onToggle, onDelete }) => {
    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <span
                onClick={() => onToggle(index)}
                style={{ cursor: "pointer" }}
                aria-label="Toggle Todo"
            >
                {todo.text}
            </span>
            <button onClick={() => onDelete(index)} aria-label="Delete Todo">
                Delete
            </button>
        </li>
    );
};

export default Todo;
