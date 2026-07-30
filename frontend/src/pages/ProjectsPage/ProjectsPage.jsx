import './ProjectsPage.css'
import ProjectList from "../../components/ProjectList/ProjectList.jsx";
import CreateProjectModal from "../../components/CreateProjectModal/CreateProjectModal.jsx";
import {useState} from "react";

const ProjectsPage = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);

    }
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="projects-page">

            <div className="projects-header">
                <h1>Projects</h1>

                <button
                    className="create-project-btn"
                    onClick={openModal}
                >
                    Create new project
                </button>
            </div>


            <div className="projects-content">
                <ProjectList />
            </div>


            {isModalOpen && (
                <CreateProjectModal onClose={closeModal} />
            )}

        </div>
    );

    // return (
    //     <>
    //         <div className={"container"}>
    //             <h1>Projects</h1>
    //             <button onClick={openModal}>Create new project</button>
    //             <ProjectList/>
    //
    //             {isModalOpen && (
    //                 <CreateProjectModal onClose={closeModal} />
    //             )}
    //             {/*hidden*/}
    //             {/*<CreateProjectModal/>*/}
    //
    //
    //         </div>
    //     </>
    // )
}

export default ProjectsPage;