import {createProject, getAllProjects, getProject, removeProject} from "../services/projectService.js";
import {request, response} from "express";

const addProject = async (request, response) => {
    try{
        const project = await createProject({
            // type: 'project',
            title: request.body.title,
            description: request.body.description,
            createdBy : request.body.createdBy,
            members: [request.body.createdBy]
            }

        );
        response.json(project);

    } catch (error){
        // console.log(error);
        throw error;
    }
}

const findAllProjects = async (request, response) => {
    try{
        const projects = await getAllProjects();
        response.json(projects);
    } catch (error){
        throw error;
    }
}

const findProject = async (request, response) => {
    try {
        const project = await getProject(request.params.id);
        response.json(project);

    } catch (error){
        console.log(error);
    }
}

const deleteProject = async (request, response) => {
    try {
        await removeProject(request.params.id);
        response.json({message: "Project deleted successfully"});
    } catch (error){
        console.log(error);
    }
}


export {addProject, findAllProjects, findProject, deleteProject};