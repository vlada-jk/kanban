import {usersDB} from "../config/couchdb.js";

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


export {loginUser};