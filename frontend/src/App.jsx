import {useState} from "react";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx";

import './App.css'

function App() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };
    if (!user) {
        return (
            <>

                <LoginPage onLogin={setUser}/>

            </>

        )


    } else {

        return (
            <>
                <header>
                    <h2>Hello,  {user?.name}</h2>
                    <div>
                        <button id={"btn-logout"} onClick={logout}></button>
                    </div>
                </header>
                <ProjectsPage/>
            </>

        )


    }


    // return (
    //     <>
    //
    //         <LoginPage onLogin={setUser}/>
    //
    //         {user && <h2>Hello, {user.name}</h2>}
    //          {/*<h2>Hello,  {user?.name}</h2>*/}
    //
    //         <ProjectList/>
    //
    //     </>
    // );

}

export default App;
