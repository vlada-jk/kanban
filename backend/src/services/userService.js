import {usersDB} from "../config/couchdb.js";


//
// const createUser = (user) => {
//     return usersDB.insert(user)
//         .then((user) => {
//             console.log(user)
//             return user;
//         }).catch((err) => {
//             console.warn(err)
//         });
// }
//
// const getUsers = () => {
//     return usersDB.list({
//         include_docs: true,
//     }).then(result => {
//         return result.rows.map(row => row.doc);
//         // result.rows.map(row => row.doc)
//     })
// }
//
// export {createUser, getUsers}
// const createUser = async (user) => {
//
//     const result = await usersDB.insert(user);
//
//     return result;
//
// };

const createUser = async (user) => {

    const result = await usersDB.insert(user);

    return result;

};

const getUsers = async () => {

    const result = await usersDB.list({
        include_docs: true,
    });

    return result.rows.map(row => row.doc);

};

export { createUser, getUsers };