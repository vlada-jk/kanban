import './TaskCard.css';
import {getUserById, updateTaskStatus} from "../../services/api.js";
import {useStore} from "../../store/index.js";
import {useEffect, useState} from "react";


const TaskCard = ({task, projectId}) => {

    const updateTasks = useStore(state => state.updateTasks);
    const deleteTask = useStore(state => state.deleteTask);


    const changeStatus = async (event) => {
        const newStatus = event.target.value;

        await updateTaskStatus(task._id, newStatus);
        await updateTasks(projectId);
    };


    const handleDelete = async () => {
        await deleteTask(task._id, projectId);
    };
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        getUserById(task.createdBy)
            .then(data => setCreator(data));
    }, [task.createdBy]);

    return (
        <div className="task-card">

            <div className="task-info">
                <h3>{task.title}</h3>

                <p className="task-description">
                    {task.description}
                </p>
                <p className="task-meta">
                    Created by: {creator?.name}
                </p>

                <p className="task-meta">
                    Created: {new Date(task.createdAt).toLocaleDateString()}
                </p>
            </div>

            <div className="task-actions">

                <select
                    className="task-status"
                    value={task.status}
                    onChange={changeStatus}
                >
                    <option value="Todo">Todo</option>
                    <option value="InProcess">In Process</option>
                    <option value="Done">Done</option>
                </select>


                <button
                    className="task-delete-btn"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>

        </div>
    );
};


export default TaskCard;