import { v4 as uuidv4 } from 'uuid';

const todoInitialState = {
    todos: [
        { id: 1, text: 'Learn Redux', completed: false },
        { id: 2, text: 'Build a Todo App', completed: false },
        { id: 3, text: 'Master React', completed: true },
    ]
};

function validateIndex(index, todosLength) {
    return typeof index === 'number' && index >= 0 && index < todosLength;
}

function todoReducer(state = todoInitialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            { if (!action.payload || !action.payload.text || !action.payload.text.trim()) return state;

            const newTodo = {
                id: uuidv4(), // Using a unique ID generator
                text: action.payload.text.trim(),
                completed: false
            };

            return {
                ...state,
                todos: [...state.todos, newTodo]
            }; }

        case "TOGGLE_TODO":
            if (!action.payload || !validateIndex(action.payload.index, state.todos.length)) return state;

            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.index
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };

        case "DELETE_TODO":
            if (!action.payload || !validateIndex(action.payload.index, state.todos.length)) return state;
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload.index)
            };

        default:
            return state;
    }
}

export default todoReducer;
