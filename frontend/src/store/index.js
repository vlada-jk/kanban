import { create } from 'zustand';

const api_backend = "http://localhost:3000";

export const useStore = create((set) => {
    return {
        projects: [],

        updateCatalog: async () => {
            try {
                const response = await fetch(`${api_backend}/api/projects`);

                if (!response.ok) {
                    throw new Error("Fehler beim Laden des Katalogs");
                }

                const data = await response.json();

                set({
                    projects: data
                });

            } catch (error) {
                console.error("Catalog konnte nicht geladen werden:", error);
            }
        },

        tasks: [],

        updateTasks: async (projectId) => {
            const response = await fetch(
                `${api_backend}/api/tasks/${projectId}`
            );

            const data = await response.json();

            set({
                tasks: data
            });
        },

        deleteTask: async (id, projectId) => {
            await fetch(`${api_backend}/api/tasks/${id}`, {
                method: "DELETE",
            });

            const response = await fetch(
                `${api_backend}/api/tasks/${projectId}`
            );

            const data = await response.json();

            set({
                tasks: data
            });
        },

        deleteProject: async (id) => {

            const response = await fetch(
                `${api_backend}/api/projects/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Project delete failed");
            }

            await useStore.getState().updateCatalog();
        }
        //
        //     await fetch(`${api_backend}/api/projects/${id}`, {
        //         method: "DELETE",
        //     });
        //
        //     await useStore.getState().updateCatalog();
        // }
    };
});