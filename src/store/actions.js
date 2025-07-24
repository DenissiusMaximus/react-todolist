export const FETCH_TODOS = 'FETCH_TASKS';
export const FETCH_TODOS_FULFILLED = 'FETCH_TODOS_FULFILLED';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_FULFILLED = 'FETCH_CATEGORIES_FULFILLED';

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_FULFILLED = 'ADD_TODO_FULFILLED';

export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_FULFILLED = 'DELETE_TODO_FULFILLED';

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_TODO_FULFILLED = 'TOGGLE_TODO_FULFILLED';

export const fetchTodos = () => ({ type: FETCH_TODOS });
export const fetchTodosFulfilled = (todos) => ({
    type: FETCH_TODOS_FULFILLED,
    payload: todos
});

export const fetchCategories = () => ({ type: FETCH_CATEGORIES });
export const fetchCategoriesFulfilled = (categories) => ({
    type: FETCH_CATEGORIES_FULFILLED,
    payload: categories
});

export const addTodo = (todos) => ({
    type: ADD_TODO,
    payload: todos
});
export const addTodoFulfilled = (todos) => ({
    type: ADD_TODO_FULFILLED,
    payload: todos
});

export const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId
});
export const deleteTodoFulfilled = (todos) => ({
    type: DELETE_TODO_FULFILLED,
    payload: todos
});

export const toggleTodo = (todoId) => ({
    type: TOGGLE_TODO,
    payload: todoId
});
export const toggleTodoFulfilled = (todos) => ({
    type: TOGGLE_TODO_FULFILLED,
    payload: todos
});