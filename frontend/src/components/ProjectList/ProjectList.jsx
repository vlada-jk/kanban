import './ProjectList.css';
import {useEffect, useState} from 'react';

import {getProjects} from "../../services/api.js";


const ProjectList = () => {

    const [projects, setProjects] = useState([]);

    // const listProjects = getProjects();
    useEffect(() => {
        getProjects().then((data) => {
            setProjects(data);
        });
    }, [])

    return (
        <>
            {projects.map(project => (
                <p key={project._id}>{project.title}</p>
            ))}
        </>
    );
}

export default ProjectList;
