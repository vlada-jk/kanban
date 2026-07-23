'use strict'

import express from 'express';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';

const server = express();
const port = 3000;

server.use(cors());
server.use(express.json());

server.use('/api/users', userRoutes);
//
// server.get('/api/tasks', (req, res) => {
//     res.json([
//         {
//             id: 1,
//             title: 'first',
//             status: 'todo'
//         }
//     ])
// })

// server.use(express.static('public', {
//     extensions: ['html']
// }));

// server.get("/", (req, res) => {
//     res.send("Hello World!");
// })

const init = () =>{
    server.listen(port, (err) => {
        if (err) console.warn;
        else console.log('Listening on port ' + port);
    })
}

init();