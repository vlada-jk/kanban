import {createUser, getUserById, getUsers} from "../services/userService.js";

const addUser = async (request, response) => {
    try {
        const user = await createUser({
            // type: 'user',
            name: request.body.name,
        });
        response.json(user);

    } catch (err){
        console.log(err);
    }
}

const findUsers = async (request, response) => {
    try {
        const users = await getUsers({});
        response.json(users);

    } catch (err) {
        console.log(err);
    }

}


const findUserById = async (request, response) => {
    try {
        const user = await getUserById(request.params.id);

        response.json(user);

    } catch (error) {
        response.status(500).json({
            error: error.message
        });
    }
};

export {addUser, findUsers, findUserById}