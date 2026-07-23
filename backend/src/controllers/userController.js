import {createUser, getUsers} from "../services/userService.js";

const addUser = async (request, response) => {
    try {
        const user = await createUser({
            type: 'user',
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

export {addUser, findUsers}