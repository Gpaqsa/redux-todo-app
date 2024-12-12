import Todo from "./Todo.jsx";

const TodoList = ({ todos, onToggle, onDelete }) => {
    console.log(todos)
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    onToggle={() => onToggle(index)} // Pass the index or todo.id to the handler
                    onDelete={() => onDelete(index)} // Same for delete action
                />
            ))}
        </ul>
    );
};

export default TodoList;
