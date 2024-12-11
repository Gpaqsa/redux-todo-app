import TodoList from "./components/TodoList.jsx";
import {useState} from "react";
import InputForm from "./components/InputForm.jsx";
const data = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master Redux', completed: false }
]

function App() {
    const [todoData, setTodoData] = useState(data)
    const [inputTodo, setInputTodo] = useState("");

  return (
    <div className="app">
        <InputForm inputTodo={inputTodo} setInputTodo={setInputTodo} todoData={todoData} setTodoData={setTodoData}/>
        <TodoList data={todoData} setTodoData={setTodoData}/>
    </div>
  )
}

export default App
