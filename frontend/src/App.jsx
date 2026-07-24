import {useState} from "react";

const createProject = () => {
    fetch('http://localhost:3000/api/projects', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            title: "Мой первый проект",
            createdBy: "749afd92ccb89c62306df3b0e3007b7d"
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
};
function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {

        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name: "Anna",
                password: "1234"
            })
        })
            .then(response => response.json())
            .then(data => {localStorage.setItem(
                "user",
                JSON.stringify(data)
            )
                console.log(data)
            });

    };

    return (
        <>
            <button onClick={login}>
                Login
            </button>
            <h2>Hello,  {user?.name}</h2>
            <button onClick={createProject}>
                Create project
            </button>
        </>
    );

}

export default App;

// import {useEffect, useState} from "react";
//
// const App = () => {
//   const [tasks, setTasks] = useState([]);
//
//   useEffect(() => {
//     fetch('http://localhost:3000/api/tasks')
//     .then(res => res.json())
//         .then(data => setTasks(data)).catch(err => console.log(err));
//   }, [])
//
//   return (
//       <>
//       <h1>Tasks</h1>
//         {tasks.map((task) => (
//             <>
//             <p key={task.id}>{task.title}</p>
//             <p key={task.id}>{task.status}</p>
//             </>
//         ))}
//       </>
//   )
// }
//
// export default App;