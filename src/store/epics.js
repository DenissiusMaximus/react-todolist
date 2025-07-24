import { ofType } from "redux-observable";
import {mergeMap, map, pipe, from} from "rxjs";
import { CategoriesApi, TodosApi } from "./api";
import * as actions from "./actions";

export const fetchTodosEpic = action$ => action$.pipe(
    ofType(actions.FETCH_TODOS),
    mergeMap(() =>
        from(TodosApi.fetchTodos()).pipe(
            map(response => actions.fetchTodosFulfilled(response))
        )
    )
);

export const addTodoEpic = action$ => action$.pipe(
    ofType(actions.ADD_TODO),
    mergeMap(action =>
        from(TodosApi.addTodo(action.payload)).pipe(
            map(response => actions.addTodoFulfilled(response))
        )
    )
);

export const deleteTodoEpic = action$ => action$.pipe(
    ofType(actions.DELETE_TODO),
    mergeMap(action =>
        from(TodosApi.deleteTodo(action.payload)).pipe(
            map(response => actions.deleteTodoFulfilled(response))
        )
    )
);

export const toggleTodoEpic = action$ => action$.pipe(
    ofType(actions.TOGGLE_TODO),
    mergeMap(action =>
        from(TodosApi.toggleTodo(action.payload)).pipe(
            map(response => actions.toggleTodoFulfilled(response))
        )
    )
);

export const fetchCategoriesEpic = action$ => action$.pipe(
    ofType(actions.FETCH_CATEGORIES),
    mergeMap(() =>
        from(CategoriesApi.fetchCategories()).pipe(
            map(response => actions.fetchCategoriesFulfilled(response))
        )
    )
);