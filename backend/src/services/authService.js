import {usersDB} from "../config/couchdb.js";

import {getUserByName} from "./userService.js";

const registerUser = async (name, password) => {
    try{
        const existingUser = await getUserByName(name);

        if (existingUser) {
            throw new Error("User already exists");
        }

        const newUser = {
            name,
            password,
        };

        const result = await usersDB.insert(newUser);

        return result;

    } catch (error) {
        console.log(error);
        throw error;

    }
}



// find and return a user

const loginUser = async (name, password) => {
    try{
        const result = await usersDB.list(
            {
                include_docs: true,
            }
        )

        const users = result.rows.map((row) => row.doc)

        const user = users.find(
            user => {
                return user.name === name && user.password === password
            }
        );

        return user || null;
    } catch (error) {
        console.log(error);
    }


}


export {loginUser, registerUser};