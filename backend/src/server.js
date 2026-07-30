'use strict'

import express from 'express';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const server = express();
const port = 3000;

server.use(cors());
server.use(express.json());

// user
server.use('/api/users', userRoutes);


// auth
server.use('/api/auth', authRoutes);

// project

server.use('/api/projects', projectRoutes);

// tasks
server.use('/api/tasks', taskRoutes);

const init = () =>{
    server.listen(port, (err) => {
        if (err) console.warn;
        else console.log('Listening on port ' + port);
    })
}

init();