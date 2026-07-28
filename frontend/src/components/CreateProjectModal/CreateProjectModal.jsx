import './CreateProjectModal.css'
import {createProject} from "../../services/api.js";
import {useState} from "react";

const CreateProjectModal = ({onClose}) => {

    const [title, setTitle] = useState("");

    const handleCreate = async () => {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        await createProject({
            title,
            createdBy: user.id,
            members: [user.id]
        });
        onClose();
    };


    return (
      <>
          <div className={"overlay"}>
              <div className={"modal"}>
                  <form  onSubmit={handleCreate}>
                      <input
                          type="text"
                          placeholder="Project name"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
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
                          onClick={handleCreate}
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