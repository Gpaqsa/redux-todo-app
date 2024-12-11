import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputForm from "./InputForm.jsx";
import TodoList from "./TodoList.jsx";

const TodoPage = () => {
    const todos = useSelector((state) => state.todos); // Access the todos from Redux state
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim() !== "") return
            dispatch({ type: "ADD_TODO", payload: { text: newTodo } });
            setNewTodo(""); // Clear the input field

    };

    const toggleTodo = (index) => {
        dispatch({ type: "TOGGLE_TODO", payload: { index } });
    };

    const deleteTodo = (index) => {
        dispatch({ type: "DELETE_TODO", payload: { index } });
    };

    console.log(todos)
    return (
        <div>
            <h1>Todo List</h1>
            <InputForm onAdd={addTodo} newTodo={newTodo} setNewTodo={setNewTodo}/>
            <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo}/>
        </div>
    );
};

export default TodoPage;