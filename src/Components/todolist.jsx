import React, { useState } from 'react'
import '../App.css'

function todolist() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const addTask = () => {
        if (task.trim()) {
            if (editIndex !== null) {
                const updatedTasks = tasks.map((t, index) =>
                    index === editIndex ? task : t
                );
                setTasks(updatedTasks);
                setEditIndex(null);
            } else {
                setTasks([...tasks, task]);
            }
            setTask('');
        }
    };
    const handleChange = (e) => {
        setTask(e.target.value);
    };
    const handleEdit = (index) => {
        setTask(tasks[index]);
        setEditIndex(index);
    };
    const handleRemove = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        if (editIndex === index) {
            setEditIndex(null); 
        }
    };

    return (
        <React.Fragment>
            <div className="container">
                <h1 className="title">To do List</h1>
                <div className="box">
                    <input id="display" value={task} onChange={handleChange} placeholder='Enter the task' />
                    <button className="btn" id="pin" onClick={addTask}>{editIndex !== null ? 'Update' : 'Add task'}</button>
                </div>
                <ul className="task-list">
                    {tasks.map((t, index) => (
                        <li key={index} className="task-item">
                            {t}
                            <button onClick={() => handleEdit(index)} className="btn-edit">
                                Edit
                            </button>
                            <button onClick={() => handleRemove(index)} className="btn-remove">
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default todolist