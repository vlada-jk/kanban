import {tasksDB} from "../config/couchdb.js";

const createTask = async (task) => {
  try {
    const result = await tasksDB.insert(
        {
            ...task,
            createdAt: new Date()
        }
    );
    return result;
  } catch (error) {
    // console.error("Error creating task:", error);
    throw error;
  }
};


const getTasks = async (projectId) => {
    const result = await tasksDB.list({
        include_docs: true,
    });

    const tasks = result.rows
        .map(row => row.doc)
        .filter(task => task.projectId === projectId);

    return tasks;
};

const changeTaskStatus = async (id, status) => {
    const task = await tasksDB.get(id);

    task.status = status;

    const result = await tasksDB.insert(task);

    return result;
};

const removeTask = async (id) => {
    const task = await tasksDB.get(id);

    const result = await tasksDB.destroy(
        task._id,
        task._rev
    );

    return result;
};

export {createTask, getTasks, changeTaskStatus, removeTask};