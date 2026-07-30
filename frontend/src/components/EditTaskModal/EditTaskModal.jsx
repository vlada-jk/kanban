import {useState} from "react";
import {updateTask} from "../../services/api.js";
import {useStore} from "../../store/index.js";
import "./EditTaskModal.css";


const EditTaskModal = ({task, projectId, onClose}) => {

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const updateTasks = useStore(state => state.updateTasks);


    const handleSave = async (event) => {
        event.preventDefault();
        if (!title.trim()) {
            alert("Task name is required");
            return;
        }
        await updateTask(task._id, {
            title,
            description
        });

        await updateTasks(projectId);

        onClose();
    };


    return (
        <div className="modal-overlay">

            <div className="modal">

                <h2>Edit Task</h2>

                <form onSubmit={handleSave}>

                    <input
                        type="text"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />


                    <textarea
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />


                    <div className="modal-buttons">

                        <button type="submit">
                            Save
                        </button>


                        <button
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};


export default EditTaskModal;