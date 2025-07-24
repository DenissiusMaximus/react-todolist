import {Task} from "../App";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let todos = [
    new Task('Task 1', '2021-01-01', '12:00', 'Home'),
]

let categories = ['Work', 'Personal', 'Urgent', 'Later'];

export const CategoriesApi = {
    fetchCategories: async () => {
        await delay(700);
        return [...categories];
    }
}

export const TodosApi = {
    fetchTodos: async () => {
        await delay(700);

        return [...todos];
    },

    addTodo: async ({title, date, time, category}) => {
        await delay(200)

        if(!title || title.trim().length === 0) {
            console.log('Invalid title');
            return null;
        }

        const newTodo = new Task(title, date, time, category, todos.length);

        todos.push(newTodo);

        return newTodo;
    },

    toggleTodo: async (id) => {
        await delay(200);

        const todo = todos.find(todo => todo.id === id);

        if (!todo) {
            console.log(todos)
            console.log('Todo not found with id:', id);
            return null;
        }

        if (todo.dateCompleted === null) {
            todo.dateCompleted = Date.now();
        } else {
            todo.dateCompleted = null;
        }

        todos.map((t) => (t.id === id ? todo : t));

        return [...todos];
    },

    deleteTodo: async (id) => {
        await delay(700);
        console.log('Deleting todo with id:', id);

        todos = todos.filter(todo => todo.id !== id);

        return [...todos];
    }

}