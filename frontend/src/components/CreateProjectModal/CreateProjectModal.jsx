import './CreateProjectModal.css'
import {createProject} from "../../services/api.js";
import {useState} from "react";
import {useStore} from "../../store/index.js";


const CreateProjectModal = ({onClose}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const updateCatalog = useStore(state => state.updateCatalog)

    const handleCreate = async (event) => {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        if (!title.trim()) {
            alert("Project name is required");
            return;
        }

        await createProject({
            title,
            createdBy: user.id,
            description,
            members: [user.id]
        });
        updateCatalog();
        onClose();
    };


    return (
      <>
          <div className={"overlay"}>
              <div className={"modal"}>
                  <h2>Create Project</h2>
                  <form  onSubmit={handleCreate}>
                      <input
                          type="text"
                          placeholder="Project name"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                      />

                      <textarea
                          placeholder="Project description"

                          value={description}
                          onChange={(e) => setDescription(e.target.value)}

                      />


                      <div className="modal-buttons">
                          <button
                              className="btn-cancel"
                              onClick={onClose}
                              type={"button"}
                          >
                              Cancel
                          </button>
                          <button
                          className="btn-create"
                          // onClick={handleCreate}
                          // type="button"
                          type="submit"

                          >

                              Create
                          </button>
                      </div>
                  </form>
              </div>


          </div>

      </>
    );


}

export default CreateProjectModal;