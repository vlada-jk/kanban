import {createTask, getTasks, changeTaskStatus, removeTask} from "../services/taskService.js";

const addTask = async (request, response) => {
    try {
        // const task = await createTask(request.body);
        // response.status(201).json(task);

        const task = await createTask({
            title: request.body.title,
            status: request.body.status,
            projectId: request.body.projectId,
            createdBy: request.body.createdBy,
            description: request.body.description
        });
        response.json(task);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

const findTasks = async (request, response) => {
    try {
        const tasks = await getTasks(request.params.projectId);
        response.json(tasks);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}
const updateTaskStatus = async (request, response) => {
    try {
        const task = await changeTaskStatus(
            request.params.id,
            request.body.status
        );

        response.json(task);

    } catch (error) {
        response.status(500).json({error: error.message});
    }
};

const deleteTask = async (request, response) => {
    try {
        const result = await removeTask(request.params.id);

        response.json(result);

    } catch (error) {
        console.log(error);

        response.status(500).json({
            error: error.message
        });
    }
};

export { addTask, findTasks,  updateTaskStatus, deleteTask};