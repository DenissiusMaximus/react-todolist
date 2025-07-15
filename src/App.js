import './App.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";



export class Task {
    constructor(title, date, time, category, id = 0)
    {
        this.id = id;
        this.title = title;
        this.date = date;
        this.time = time;
        this.category = category;
        this.dateCompleted = null;
    }

    validate() {
        if (!this.title || typeof this.title !== 'string') {
            return false;
        }
        return this.title.trim().length > 0;
    }
}

const addTask = (newTask) => ({ type : 'ADD_TASK', payload: newTask });
const deleteTask = (id) => ({ type : 'DELETE_TASK', payload: { id } });
const setTaskCompleted = (id) => ({ type : 'SET_TASK_COMPLETED', payload: { id } });

export default function App() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    return (<div className="m-20 mt-16">
        <CreateTaskForm />
        <TaskList />
    </div>)
}


function CreateTaskForm() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addTask(new Task(title, date, time, category)));
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-between">
                <div className="flex flex-row gap-3 py-2">
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" placeholder="Name"
                        className="flex-1 border rounded placeholder:opacity-50 p-2"/>
                    <button
                        type="submit" className="bg-blue-500 text-white rounded p-2">Add
                    </button>
                </div>

                <div className="flex flex-1 flex-row gap-3 py-2 justify-between">
                    <input
                        onChange={(e) => setDate(e.target.value)} type="date"
                        className="flex-1 border rounded p-2 invalid:text-red-500"/>
                    <input
                        onChange={(e) => setTime(e.target.value)} type="Time"
                        className="flex-1 border rounded p-2 invalid:text-red-500"/>
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        name="categoryName"
                        className="flex-1 flex border rounded p-2 border-gray-200 bg-transparent">
                        <option value="">No cat</option>
                        <option value="Cat 1">Cat 1</option>
                        <option value="Cat 2">Cat 2</option>
                    </select>
                </div>

            </div>
        </form>
    </>)
}

function SingleTask({task, onDelete, onCompleted}) {
    const isCompleted = task.dateCompleted !== null;
    const buttonColor = isCompleted ? 'bg-gray-400 ms-3 rounded p-1' : 'bg-green-600 ms-3 rounded p-1';
    const textFormat = isCompleted ? 'p-2 text-wrap line-through text-gray-500' : 'p-2 text-wrap';

    return (<>
        <div className="border p-3 mb-2 rounded flex">
            <div className="justify-start flex-col me-3 items-center">
                <span className={textFormat}>{task.title}</span>
                <div className="justify-start flex flex-col items-start text-sm">
                    <span className="p-2 text-blue-500">
                        {task.date}
                        <span className="ms-1">
                            {task.time}
                        </span>
                    </span>
                </div>
            </div>

            <div className="justify-end flex me-3 items-center ms-auto">
                <span className="p-2 text-lg text-wrap me-3">{task.category}</span>

                <button className="bg-red-600 ms-3 rounded p-1" onClick={() => onDelete(task.id)}>
                    <svg
                        className="opacity-95 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z"
                            fill="currentColor
"
                        />
                    </svg>
                </button>

                <button className={buttonColor} onClick={() => onCompleted(task.id)}>
                    <svg
                        className="opacity-95 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </div>

        </div>
    </>)
}

function TaskList() {
    const [category, setCategory] = useState('');

    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    function onDelete(id) {
        dispatch(deleteTask(id));
    }

    function onComplete(id) {
        dispatch(setTaskCompleted(id));
    }

    const completedTasks = tasks.filter(task => task.dateCompleted !== null).sort((a, b) => b.dateCompleted - a.dateCompleted).filter(task => category !== ''? task.category === category : true);
    const unCompletedTasks = tasks.filter(task => task.dateCompleted === null).filter(task => category !== ''? task.category === category : true);


    return (<>
        <select
            onChange={(e) => setCategory(e.target.value)}
            name="categoryName"
            className="flex-1 flex border rounded p-2 border-gray-200 bg-transparent mb-2">
            <option value="">No cat</option>
            <option value="Cat 1">Cat 1</option>
            <option value="Cat 2">Cat 2</option>
        </select>

        {unCompletedTasks.map((task, index) => (
            <SingleTask key={index} task={task} onDelete={onDelete} onCompleted={onComplete}/>))}

        {completedTasks.length > 0 && <div className="border-2 m-5 rounded"></div>}

        {completedTasks.map((task, index) => (
            <SingleTask key={index} task={task} onDelete={onDelete} onCompleted={onComplete}/>))}
    </>);
}