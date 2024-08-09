import css from "./TaskForm.module.css"

import { FaPlus } from "react-icons/fa";


const TaskForm = ({ addTask, taskName, setTaskName }) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() === "") return;

        addTask({ name: taskName });

        setTaskName("");
    }

    const handleChange = (e) => {
        setTaskName(e.target.value)

    }


    return (<>
        <form className={css.taskFormWrapper} onSubmit={handleSubmit}>

            <input className={css.taskFormInput} type="text" placeholder="What needs to be done?" value={taskName} onChange={handleChange} />

            <button className={css.taskFormBtn} type="submit"><FaPlus /></button>
        </form>

    </>)
}

export default TaskForm