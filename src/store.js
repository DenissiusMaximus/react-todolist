import {createStore} from "redux";
import {Task} from "./App";


let defaultState = {
    tasks: [],
    categories: ['Home', 'Work', 'Personal'],
    nextId: 0,
}

const tasksReducer = (state = defaultState, action) => {
    if (action.type === 'ADD_TASK') {

        const newTask = new Task(action.payload.title, action.payload.date, action.payload.time, action.payload.category, state.nextId);

        if (!newTask.validate()) {
            console.error("Invalid task:", newTask);
            return state;
        }

        return {
            ...state,
            tasks: [...state.tasks, newTask],
            nextId: state.nextId + 1
        };
    }
    if (action.type === 'DELETE_TASK') {
        console.log(action)

        return {
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.payload.id)
        };
    }
    if (action.type === 'SET_TASK_COMPLETED') {
        console.log(action)

        return {
            ...state,
            tasks: state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        dateCompleted: task.dateCompleted === null ? Date.now() : null
                    };
                }
                return task;
            })
        };
    }
    return state;
}

export default createStore(tasksReducer);