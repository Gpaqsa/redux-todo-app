const InputForm = ({ newTodo, setNewTodo, onAdd }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        onAdd();
        setNewTodo('');
    };

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <label htmlFor="todo-input" className="sr-only">Add a new todo</label>
            <input
                id="todo-input"
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
                aria-label="New Todo"
            />
            <button type="submit" aria-label="Add Todo">
                Add
            </button>
        </form>
    );
};

export default InputForm;
