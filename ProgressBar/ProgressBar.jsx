import css from "./ProgressBar.module.css";

const ProgressBar = ({ tasks, setTask }) => {
    const completedTasks = tasks.filter(task => task.checked).length;
    const totalTasks = tasks.length;
    const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    const getColor = () => {
        if (completionPercentage < 40) {
            return "#FF0000"; // Красный
        } else if (completionPercentage < 70) {
            return "#FFFF00"; // Желтый
        } else {
            return "#90EE90"; // Зеленый
        }
    };

    const removeTasks = () => {
        setTask((prevTask) => prevTask.filter((task) => !task.checked))
    }

    return (
        <div className={css.container}>
            <div className={css.progressBar}>
                <div
                    className={css.progressBarFill}
                    style={{ width: `${completionPercentage}%`, backgroundColor: getColor() }}
                >
                </div>
                <span className={css.progressLabel}>
                    {`${completedTasks} of ${totalTasks} tasks done`}
                </span>
            </div>
            <button onClick={() => removeTasks()} className={css.removeTasksBtn}>
                <p className={css.progressTasksText}>Remove checked</p>
            </button>
        </div>
    );
};

export default ProgressBar;
