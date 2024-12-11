const todoInitialState = []; // Initial state should be an empty array

function todoReducer(state = todoInitialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            if (!action.payload || !action.payload.text) {
                console.error("ADD_TODO action requires a text payload.");
                return state;
            }
            return [...state, { text: action.payload.text, done: false }];

        case "TOGGLE_TODO":
            if (
                !action.payload ||
                typeof action.payload.index !== "number" ||
                action.payload.index < 0 ||
                action.payload.index >= state.length
            ) {
                console.error("Invalid index for TOGGLE_TODO.");
                return state;
            }
            return state.map((todo, index) =>
                index === action.payload.index
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        case "DELETE_TODO":
            if (
                !action.payload ||
                typeof action.payload.index !== "number" ||
                action.payload.index < 0 ||
                action.payload.index >= state.length
            ) {
                console.error("Invalid index for DELETE_TODO.");
                return state;
            }
            return state.filter((_, index) => index !== action.payload.index);

        default:
            return state; // Ensure state is always returned
    }
}
export default todoReducer;