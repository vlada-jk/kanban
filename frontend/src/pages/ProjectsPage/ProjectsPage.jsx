import './ProjectsPage.css'
import ProjectList from "../../components/ProjectList/ProjectList.jsx";
import CreateProjectModal from "../../components/CreateProjectModal/CreateProjectModal.jsx";
import {useState} from "react";
import {useStore} from "../../store/index.js";

const ProjectsPage = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);

const nam = useStore((state) => state.x);

    const openModal = () => {
        setIsModalOpen(true);

    }
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className={"container"}>
                {nam}
                <h1>Projects</h1>
                <button onClick={openModal}>Create new project</button>
                <ProjectList/>

                {isModalOpen && (
                    <CreateProjectModal onClose={closeModal} />
                )}
                {/*hidden*/}
                {/*<CreateProjectModal/>*/}


            </div>
        </>
    )
}

export default ProjectsPage;