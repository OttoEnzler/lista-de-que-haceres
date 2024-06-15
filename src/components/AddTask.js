import React, {useState} from "react";
import ShowTasks from "./ShowTasks";

const AddTask = (props) => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const newTask = () => {
        setTasks([...tasks, { text: task, completed: false }]);
        setTask('');    
    }

    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={newTask}>Add</button>
            <ShowTasks tasks={tasks} setTasks={setTasks} />
        </div>
    )
}
export default AddTask;
