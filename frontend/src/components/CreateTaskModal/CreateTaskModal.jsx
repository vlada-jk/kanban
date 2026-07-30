import './CreateTaskModal.css'
import {useState} from "react";
import {createTask} from "../../services/api.js";
import {useStore} from "../../store/index.js";


const CreateTaskModal = ({onClose, projectId}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const updateTasks = useStore(state => state.updateTasks);


    const handleCreate = async (event) => {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        await createTask(
            {
                title,
                createdBy: user.id,
                status: "Todo",
                description,
                projectId
            }
        );
        await updateTasks(projectId);
        onClose();
    };


    return (
        <div className="task-overlay">

            <div className="task-modal">

                <h2>Create Task</h2>


                <form onSubmit={handleCreate}>

                    <input
                        type="text"
                        placeholder="Task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />


                    <textarea
                        placeholder={"Task description"}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}

                    />


                    <div className="task-modal-buttons">

                        <button
                            type="button"
                            className="task-btn-cancel"
                            onClick={onClose}
                        >
                            Cancel
                        </button>


                        <button
                            type="submit"
                            className="task-btn-create"
                        >
                            Add Task
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};


export default CreateTaskModal;
