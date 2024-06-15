import React from "react";
import TaskList from "./TaskList";

const ShowTasks = ({ tasks, setTasks }) => {
    return (
        <ul>{
            tasks.map((task, i) => {
                return (
                    <div>
                        <TaskList key={i} index={i} task={task} tasks={tasks} setTasks={setTasks} />
                    </div>
                )
            })
        }</ul>
    )
}
export default ShowTasks;
