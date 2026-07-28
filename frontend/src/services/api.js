const api_backend = "http://localhost:3000";

const getProjects = async () => {
    const response = await fetch(`${api_backend}/api/projects`, {});
    return response.json();
};

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

export {getProjects , createProject};

