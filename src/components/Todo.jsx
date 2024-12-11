const Todo = (index, todo, onToggle, onDelete) => {
    console.log(todo)
    return (
        <li key={index} style={{textDecoration: todo.done ? "line-through" : "none"}}>
            <span onClick={() => onToggle(index)}>{todo.text}</span>
            <button onClick={() => onDelete(index)}>Delete</button>
        </li>
    )
}
export default Todo;