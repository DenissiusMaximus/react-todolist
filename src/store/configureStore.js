import { createEpicMiddleware } from 'redux-observable';
import {applyMiddleware, createStore} from "redux";
import {rootEpic, rootReducer} from "./root";

const epicMiddleware = createEpicMiddleware();

export function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    return store;
}
