import './TaskCard.css';
import {getUserById, updateTaskStatus} from "../../services/api.js";
import {useStore} from "../../store/index.js";
import {useEffect, useState} from "react";
import EditTaskModal from "../EditTaskModal/EditTaskModal.jsx";


const TaskCard = ({task, projectId}) => {
    const [isEditOpen, setIsEditOpen] = useState(false);

    
    const updateTasks = useStore(state => state.updateTasks);
    const deleteTask = useStore(state => state.deleteTask);


    const changeStatus = async (event) => {
        const newStatus = event.target.value;

        await updateTaskStatus(task._id, newStatus);
        await updateTasks(projectId);
    };


    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!confirmed) return;
        await deleteTask(task._id, projectId);
    };
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        getUserById(task.createdBy)
            .then(data => setCreator(data));
    }, [task.createdBy]);

    return (
        <>

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
                    // className="task-status"
                    className={`task-status ${task.status.toLowerCase()}`}

                    value={task.status}
                    onChange={changeStatus}
                >
                    <option value="Todo">Todo</option>
                    <option value="InProcess">In Process</option>
                    <option value="Done">Done</option>
                </select>

                <button
                    className={"task-btn-edit"}
                    onClick={() => setIsEditOpen(true)}>

                    Edit
                </button>
                <button
                    className="task-delete-btn"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>

        </div>
            {isEditOpen && (
                <EditTaskModal
                    task={task}
                    projectId={projectId}

                    onClose={() => setIsEditOpen(false)}
                />
            )}
        </>
    );
};


export default TaskCard;