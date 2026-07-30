const api_backend = "http://localhost:3000";

// Registration

const registration = async (user) => {
    const response = await fetch(`${api_backend}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    // return response.json();

    const data = await response.json();


    if (!response.ok) {
        throw new Error(data.message);
    }


    return data;
};

// Projects (All)

const getProjects = async () => {
    //     const response = await fetch(`${api_backend}/api/projects`, {});
    const response = await fetch(`${api_backend}/api/projects`);
    if (!response.ok) {
        throw new Error("Projects loading failed");
    }
    return response.json();
};

// Project

const getProjectById = async (id) => {
    const response = await fetch(`${api_backend}/api/projects/${id}`);
    if (!response.ok) {
        throw new Error("Project loading failed");
    }
    return response.json();
}

const createProject = async (project) => {
    const response = await fetch(`${api_backend}/api/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    });

    return response.json();
};


// Tasks

const getTasks = async (projectId) => {
    const response = await fetch(`${api_backend}/api/tasks/${projectId}`);
    if (!response.ok) {
        throw new Error("Tasks loading failed");
    }
    return response.json();
};

const createTask = async (task) => {
    const response = await fetch(`${api_backend}/api/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    return response.json();
};

const updateTaskStatus = async (id, status) => {
    const response = await fetch(`${api_backend}/api/tasks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({status}),
    });

    return response.json();
};
//
// const deleteTask = async (id) => {
//     const response = await fetch(
//         `${api_backend}/api/tasks/${id}`,
//         {
//             method: "DELETE",
//         }
//     );
//
//     return response.json();
// };

const getUserById = async (id) => {
    const response = await fetch(
        `${api_backend}/api/users/${id}`
    );

    return response.json();
};

export {registration, getProjects, getProjectById, createProject, getTasks, createTask, updateTaskStatus, getUserById};

