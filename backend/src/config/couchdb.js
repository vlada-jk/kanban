import nano from "nano";

const login = 'admin';
const password = 'password';

const couch = nano(`http://${login}:${password}@localhost:5984`);

const usersDB = couch.db.use('users_db');
const projectsDB = couch.db.use('projects_db');
const tasksDB = couch.db.use('tasks_db');

export { usersDB, projectsDB, tasksDB };
