import { nanoid } from "nanoid";
import css from "./App.module.css"

import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

const App = () => {
    const [tasks, setTask] = useState([])
    const [taskName, setTaskName] = useState("");

    const addTask = (target) => {
        const finalTarget = {
            ...target,
            checked: false,
            id: nanoid()
        };

        setTask(prevState => [...prevState, finalTarget])

    }
    const toggleChecked = (id) => {
        setTask((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, checked: !task.checked } : task
            )


        );
    };

    const toggleValue = (id, textname) => {
        setTask((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, name: textname } : task))
    }

    console.log(tasks)

    const delTask = (id) => {
        setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const editTask = (id, name) => {
        toggleValue(id, name)
    }

    // const removeTasks = (checked) => {
    //     setTask((prevTask) => prevTask.filter((task) => task.checked !== checked))
    // }
    return (
        <div className={css.containerApp}>
            <div className={css.wrapperApp}>
                <div className={css.sectionApp}>
                    <div className={css.sectionAppColor}>  <h1 className={css.titleApp}>TO DO LIST</h1>
                        <TaskForm addTask={addTask}
                            taskName={taskName}
                            setTaskName={setTaskName}

                        />

                        <TaskList tasks={tasks}
                            delTask={delTask}
                            taskName={taskName}
                            setTaskName={setTaskName}
                            // removeTasks={removeTasks}
                            toggleChecked={toggleChecked}
                            editTask={editTask}
                            toggleValue={toggleValue}
                            setTask={setTask}

                        /></div>
                </div>
            </div>

        </div>
    )
}

export default App