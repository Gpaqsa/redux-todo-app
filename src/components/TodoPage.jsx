import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputForm from "./InputForm.jsx";
import TodoList from "./TodoList.jsx";

const TodoPage = () => {
    const todos = useSelector((state) => state.todos);
    console.log(todos)
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");

    // Handlers for actions
    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            dispatch({ type: "ADD_TODO", payload: { text: newTodo.trim() } });
            setNewTodo(""); // Clear input field after adding
        }
    };

    const handleToggleTodo = (index) => {
        dispatch({ type: "TOGGLE_TODO", payload: { index } });
    };

    const handleDeleteTodo = (index) => {
        dispatch({ type: "DELETE_TODO", payload: { index } });
    };

    return (
        <div>
            <h1>Todo List</h1>
            <InputForm onAdd={handleAddTodo} newTodo={newTodo} setNewTodo={setNewTodo} />
            <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        </div>
    );
};

export default TodoPage;
