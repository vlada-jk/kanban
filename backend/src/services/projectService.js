import {projectsDB, tasksDB} from "../config/couchdb.js";
import {getTasks} from "./taskService.js";

const createProject = async (project) => {
    try {
        const result = await projectsDB.insert(
            {
                ...project,
            createdAt: new Date()
            }
        );
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

const getProject = async (id) =>{
    try{
        const project = await projectsDB.get(id);
        return project;

    }catch (error){
        console.log(error);
    }
}

// const removeProject = async (id) =>{
//     try {
//         const project = await projectsDB.get(id);
//         await projectsDB.remove(project);
//         return project;
//     } catch (error) {
//         console.log(error);
//     }
// }

const removeProject = async (id) => {
    const project = await projectsDB.get(id);

    const tasks = await getTasks(id);

    for (let i = 0; i < tasks.length; i++) {
        await tasksDB.destroy(
            tasks[i]._id,
            tasks[i]._rev
        );
    }

    await projectsDB.destroy(
        project._id,
        project._rev
    );


    return project;
};

export {createProject, getAllProjects, getProject, removeProject};