import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";


import './App.css'

function App() {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <BrowserRouter>

            {!user ? (
                <Routes>
                    <Route
                        path="/login"
                        element={<LoginPage onLogin={setUser}/>}
                    />

                    <Route
                        path="/register"
                        element={<RegisterPage />}
                    />

                    <Route
                        path="*"
                        element={<LoginPage onLogin={setUser}/>}
                    />
                </Routes>

            ) : (
                <>
                    <header>
                        <h2>Hello, {user.name}</h2>

                        <button id="btn-logout" onClick={logout}>

                        </button>
                    </header>

                    <Routes>
                        <Route path="/" element={<ProjectsPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/projects/:id" element={<ProjectPage />} />

                        <Route path="*" element={<ProjectsPage />} />

                    </Routes>
                </>
            )}

        </BrowserRouter>
    );
}


// function App() {
//
//     const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
//     const logout = () => {
//         localStorage.removeItem("user");
//         setUser(null);
//     };
//     if (!user) {
//         return (
//             <>
//
//                 <LoginPage onLogin={setUser}/>
//
//             </>
//
//         )
//
//
//     } else {
//
//         return (
//             <>
//                 <BrowserRouter>
//
//                     <header>
//                         <h2>Hello, {user.name}</h2>
//                         <button id="btn-logout" onClick={logout}>
//                             {/*Logout*/}
//                         </button>
//                     </header>
//
//                     <Routes>
//                         <Route path="/" element={<ProjectsPage />} />
//                         <Route path="/projects" element={<ProjectsPage/>}/>
//                         <Route path="/projects/:id" element={<ProjectPage/>}/>
//                         <Route path="/register" element={<RegisterPage />} />
//                         <Route path="/login" element={<LoginPage />} />
//                     </Routes>
//
//                 </BrowserRouter>
//             </>
//
//         )
//
//
//     }
//
// }

export default App;
