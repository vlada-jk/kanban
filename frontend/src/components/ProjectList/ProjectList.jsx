import './ProjectList.css';
import {useEffect, useState} from 'react';
import {useStore} from "../../store/index.js";
import {getProjects} from "../../services/api.js";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

const ProjectList = () => {

    // const {projects, updateCatalog} = useStore();
    // useEffect(() => {
    //     updateCatalog();
    // }, []);


    const projects = useStore((state) => state.projects);
    const updateCatalog = useStore(state => state.updateCatalog)
    useEffect(() => {
        updateCatalog();
    }, [])


    return (
        <div className={"project-list"}
        >
            {projects.map(project => (
                <div
                    key={project._id}
                    className={"project-item"}>
                    <ProjectCard
                        // key={project._id}
                        project={project}
                    />
                    {/*<p key={project._id}>{project.title}</p>*/}
                </div>

            ))}


        </div>
    );
}

export default ProjectList;
