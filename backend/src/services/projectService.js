import {projectsDB} from "../config/couchdb.js";

const createProject = async (project) => {
    try {
        const result = await projectsDB.insert(project);
        return result;

    } catch (error) {
        // console.log(error);
        throw error;

    }
}


const getAllProjects = async () => {
    try{

        const result = await projectsDB.list(
            {
                include_docs: true,
            }
        )

        const projects = result.rows.map((row) => row.doc)
        return projects;


    } catch (error){
        // console.log(error);
        throw error;

    }
}


export {createProject, getAllProjects};