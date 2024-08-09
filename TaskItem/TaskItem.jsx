import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import css from "./TaskItem.module.css";

const TaskItem = (props) => {
    const { name, id, delTask, checked, toggleChecked, toggleValue, editTask } = props;
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        toggleValue(id, e.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
        editTask(id, name);
    };


    return (
        <li className={css.taskItem}>
            <input
                className={css.taskItemInput}
                type="checkbox"
                checked={checked}
                onChange={() => toggleChecked(id)}
            />
            {isEditing ? (<input
                className={css.taskItemInputEdit}
                type="text"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
            />

            ) : (
                checked ? (
                    <p className={css.checkBoxChange}>{name}</p>
                ) : (
                    <p className={css.taskText} onClick={handleEditClick}>{name}</p>
                )
            )}
            <div className={css.taskBtnWrapper}>
                <button
                    className={css.taskInputBtn}
                    onClick={handleEditClick}
                >
                    <GrEdit className={css.taskItemImgEdit} />
                </button>
                <button
                    className={css.taskInputBtn}
                    onClick={() => delTask(id)}
                >
                    <FaTrashAlt className={css.taskItemImgDel} />
                </button>
            </div>



        </li>
    );
};

export default TaskItem;
