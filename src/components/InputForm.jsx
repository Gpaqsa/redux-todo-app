import {useDispatch} from "react-redux";

const InputForm = ({inputTodo, setInputTodo, todoData, setTodoData}) => {

const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        const newObj = {
            id: Math.random() * 1000,
            text: inputTodo,
            done: false
        }

        setTodoData([...todoData, newObj]);
        dispatch({
            type: 'ADD_TODO',
            payload: {
                text: inputTodo
            }
        });
        setInputTodo(" ")
        console.log(todoData)
    }

    return (
        <form onSubmit={handleSubmit} className="input-form">
            <input type="text"  value={inputTodo} onChange={e => setInputTodo(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default InputForm;

