import './ProjectCard.css';
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../services/api";
import {useEffect, useState} from "react";

const ProjectCard = ({project}) => {
    const navigate = useNavigate();
    const openCard = () => {
        navigate(`/projects/${project._id}`);

    }



    const [creator, setCreator] = useState(null);

    useEffect(() => {
        getUserById(project.createdBy)
            .then(data => setCreator(data));

    }, [project.createdBy]);

    return (
        <div className={"project-card"}>
            <div className="project-card-header">
                <h3>{project.title}</h3>
            </div>


            <div className="project-card-body">
                <p>{project.description}</p>
                <p className="project-meta">
                    Created by: {creator?.name}
                </p>

                <p className="project-meta">
                    Created: {new Date(project.createdAt).toLocaleDateString()}
                </p>
            </div>


            <div className="project-card-footer">
                <button
                    className="project-open-btn"
                    type={"button"}
                    onClick={openCard}
                >
                    Open
                </button>
            </div>
        </div>
    )
};

export default ProjectCard;