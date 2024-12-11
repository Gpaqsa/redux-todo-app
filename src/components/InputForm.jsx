
const InputForm = ({ newTodo, setNewTodo, onAdd }) => {
    return (
        <form className="input-form" >

            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={onAdd} >Add</button>
        </form>
    );
};

export default InputForm;