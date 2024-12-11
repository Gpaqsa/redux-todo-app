const Todo = ({todo, onToggle, onDelete}) => {


    return (
        <>
            <li className={`todo-item ${todo.completed ? "completed" : " "}`}>{todo.text}</li>
            <div>
                <button onClick={()=>onToggle(todo.id)} className="complete-btn" type="submit">
                    <i className="fas fa-check">DOne</i>
                </button>
                <button onClick={()=>onDelete(todo.id)} className='trash-btn'>
                    <i className="fas fa-trash">Remove</i>
                </button>
            </div>
        </>
    )
}
export default Todo;