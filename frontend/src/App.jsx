import {useEffect, useState} from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/tasks')
    .then(res => res.json())
        .then(data => setTasks(data)).catch(err => console.log(err));
  }, [])

  return (
      <>
      <h1>Tasks</h1>
        {tasks.map((task) => (
            <p key={task.id}>{task.title}</p>
        ))}
      </>
  )
}

export default App;