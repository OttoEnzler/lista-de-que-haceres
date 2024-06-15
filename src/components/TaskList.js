import React from "react";

const TaskList = ({ index, task, tasks, setTasks }) => {
    const toggleCompleted = () => {
        const updatedTasks = tasks.map((t, i) =>
            i === index ? { ...t, completed: !t.completed } : t
        );
        setTasks(updatedTasks);
        console.log(updatedTasks);
    };

    const deleteTask = () => {
        const updatedTasks = tasks.filter((t, i) => i!== index);
        setTasks(updatedTasks);
        console.log(updatedTasks);
    };
    return (
        <li key={index}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </span>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={toggleCompleted}
            />
            <button onClick={deleteTask}>Delete</button>
        </li>
    )
}
export default TaskList;
