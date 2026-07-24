import {createProject, getAllProjects} from "../services/projectService.js";

const addProject = async (request, response) => {
    try{
        const project = await createProject({
            // type: 'project',
            title: request.body.title,
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

export {addProject, findAllProjects};