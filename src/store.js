import {createStore} from "redux";

var id = 0;

let defaultState = {
    tasks: [],
    categories: [],
}

const tasksReducer = (state = defaultState, action) => {
    if(action.type === 'ADD_TASK') {
        const newTask = {
            id: id,
            title: action.payload.title,
            date: action.payload.date,
            time: action.payload.time,
            category: action.payload.category,
            dateCompleted: null
        };

        id += 1;

        return {
            ...state,
            tasks: [...state.tasks, newTask]
        };
    }
}

export default createStore(tasksReducer);