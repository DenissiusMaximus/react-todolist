import {
    FETCH_TODOS_FULFILLED,
    FETCH_CATEGORIES_FULFILLED,
    ADD_TODO_FULFILLED,
    TOGGLE_TODO_FULFILLED,
    DELETE_TODO_FULFILLED
} from "./actions";

const initialTodosState = {
    todos: [],
}

const initialCategoriesState = {
    categories: ['Home', 'Work', 'Personal', 'Urgent', 'Later'],
}

export const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case FETCH_TODOS_FULFILLED:
            return {
                ...state,
                todos: action.payload
            };

        case ADD_TODO_FULFILLED:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case DELETE_TODO_FULFILLED:
            return {
                ...state,
                todos: action.payload
            };
        case TOGGLE_TODO_FULFILLED:
            return {
                ...state,
                todos: action.payload
            };

        default:
            return state;
    }
}

export const categoriesReducer = (state = initialCategoriesState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_FULFILLED:
            console.log('categories:', action.payload);
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
}