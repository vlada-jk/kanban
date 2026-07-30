import './ProjectPage.css'
import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProjectById} from "../../services/api.js";

import CreateTaskModal from "../../components/CreateTaskModal/CreateTaskModal";
import TaskCard from "../../components/TaskCard/TaskCard.jsx";
import {useStore} from "../../store/index.js";

const ProjectPage = () => {

    const navigate = useNavigate();

    const exit = () => {
        navigate("/projects");
    };
    // const exit = ()=>{
    //     window.location.href = "/projects";
    // }

    // modal for create task
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);


    const {id} = useParams();

    const [project, setProject] = useState();

    useEffect(() => {
        getProjectById(id)
            .then(data => setProject(data));
    }, [id]);


    // const [tasks, setTasks] = useState([]);
    const tasks = useStore(state => state.tasks);
    const updateTasks = useStore(state => state.updateTasks);

    // useEffect(() => {
    //     if (project) {
    //         getTasks(id)
    //             .then(data => setTasks(data));
    //     }
    // }, [project, id]);


    useEffect(() => {
        if (project) {
            updateTasks(id);
        }
    }, [project, id]);

    const deleteProject = useStore(state => state.deleteProject);

    const handleDeleteProject = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this project?"
        );

        if (!confirmed) return;

        await deleteProject(id);
        exit();
    };


    if (!project) {
        return <div>Etwas ist schief gelaufen</div>;
    }

    return (
        <>
            <div className="project-page">

                <div className="project-header">
                    <div>
                        <h1>{project.title}</h1>
                        <p className="project-description">
                            {project.description}
                        </p>
                    </div>
                    <div className="project-actions">

                        <button
                            className="delete-project-btn"
                            type="button"
                            onClick={handleDeleteProject}
                        >
                            Delete Project
                        </button>


                        <button
                            className="back-btn"
                            type="button"
                            onClick={exit}
                        >
                            ← All Projects
                        </button>

                    </div>

                </div>


                <div className="tasks-section">
                    <h2>Tasks</h2>

                    <div className="tasks-list">
                        {tasks.length === 0 ? (
                            <p className="no-tasks">
                                No tasks yet
                            </p>
                        ) : (
                            tasks.map(task => (
                                <TaskCard
                                    key={task._id}
                                    task={task}
                                    projectId={id}

                                />
                            ))
                        )}


                    </div>

                    <button className="new-task-btn"
                            type={"button"}
                            onClick={() => setIsTaskModalOpen(true)}
                    >
                        + New Task
                    </button>

                </div>

            </div>
            {isTaskModalOpen && (
                <CreateTaskModal
                    onClose={() => setIsTaskModalOpen(false)}
                    projectId={id}
                />
            )}
        </>
    )
}

export default ProjectPage;