import TaskItem from "../TaskItem/TaskItem";
import css from "./TaskList.module.css";
// import ProgressBar from 'react-bootstrap/ProgressBar';
import ProgressBar from "../ProgressBar/ProgressBar";

const TaskList = ({ tasks, removeTasks, setTask, delTask, toggleChecked, toggleValue, editTask }) => {
    // const completedTasks = tasks.filter(task => task.checked).length;
    // const totalTasks = tasks.length;

    // const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    // Определите цвет прогресса в зависимости от completionPercentage
    // const progressBarVariant = completionPercentage < 50 ? "warning" : "success";

    return (
        <>
            <ul className={css.taskList}>
                {tasks?.length ? (
                    tasks.sort((a, b) => a.checked - b.checked).map((task) => (
                        <TaskItem
                            key={task.id}
                            id={task.id}
                            name={task.name}
                            delTask={delTask}
                            checked={task.checked}
                            toggleChecked={toggleChecked}
                            toggleValue={toggleValue}
                            editTask={editTask}
                        />
                    ))
                ) : (
                    <p className={css.taskListText}>No tasks available</p>
                )}
            </ul>
            {/* {tasks?.length ? (
                <div className={css.progressTasksWrapper}>

                    <ProgressBar className={completionPercentage < 50 ? css.lowProgress : css.highProgress}
                        now={completionPercentage}
                        key={1}>
                        <div className={css.progressInfo}>
                            <span>{`${completedTasks} of ${totalTasks} tasks done`}</span>
                        </div>

                    </ProgressBar>
                    <button className={css.removeTasksBtn}>
                        <p className={css.progressTasksText}>Remove checked</p>
                    </button>
                </div>
            ) : null} */}

            {tasks?.length ? <ProgressBar tasks={tasks}
                // removeTasks={removeTasks}
                setTask={setTask}


            /> : null}
        </>
    );
}

export default TaskList;
