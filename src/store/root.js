import {combineEpics} from "redux-observable";
import * as todosEpic from "./epics";
import {combineReducers} from "redux";
import {todosReducer, categoriesReducer} from "./reducers"

export const rootEpic = combineEpics(
    todosEpic.fetchTodosEpic,
    todosEpic.fetchCategoriesEpic,
    todosEpic.addTodoEpic,
    todosEpic.deleteTodoEpic,
    todosEpic.toggleTodoEpic

);

export const rootReducer = combineReducers({
    todos: todosReducer,
    categories: categoriesReducer,
})