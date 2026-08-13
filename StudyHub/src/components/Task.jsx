import React, { useRef } from 'react'
import { useAuth } from '../context/AuthContext'

const Task = () => {
    const {student, tasks, setTasks} = useAuth();
    const taskRef = useRef();

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        ));
    };

    const onDeleteTask = (id) => {
        setTasks(tasks.map((task) => (
            task.id !== id
        )))
    }

    const addTask = (title) => {
        setTasks(prevTasks => [
            ...prevTasks,
            {
                id: Date.now(),
                title: title,
                completed: false
            }
        ]);
    };

    return (
        <div>
            <h3>My Tasks</h3>
            {!student ? (
                <p>Login to see your tasks</p>
            ) : (
                <div>
                    <input type="text" placeholder='Enter new task' />
                    <button onClick={() => addTask()}>Add</button>

                    <div>
                        {tasks.map((task) => (
                            <div key={task.id} style={{display: "flex", gap: "4px"}}>
                                <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
                                <p>{task.title}</p>
                                <button>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Task