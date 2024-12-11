

const todoInitialState = {
    text: "",
    done: false
}


export function todoReducer (state=todoInitialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state, text: action.payload.text
            }
        case "TOGGLE_TODO":
            return {
                ...state, completed: !state.completed
            }
        case "DELETE_TODO":
            return {
                ...state, completed: !state.completed
            }
        default:
            return state;
    }
}

