import "./LoginPage.css";
import {useState} from "react";

const LoginPage = ({onLogin}) => {

        const [name, setName] = useState("");
        const [password, setPassword] = useState("");
    const login = (event) => {
        event.preventDefault();

        if (!(name && password)) return;

        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name,
                password
            })
        })
            .then(response => {
                return response.json().then(data => {
                    if (!response.ok) {
                        throw new Error(data.message);
                    }

                    return data;
                });
            })
            .then(data => {
                localStorage.setItem(
                    "user",
                    JSON.stringify(data)
                );

                onLogin(data);

                console.log(data);
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            });
    };
        // const login = (event) => {
        //     event.preventDefault();
        //     if (!(name && password)) return false;
        //
        //     fetch('http://localhost:3000/api/auth/login', {
        //         method: 'POST',
        //
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //
        //         body: JSON.stringify({
        //             name,
        //             password
        //         })
        //     })
        //         .then(response => {
        //             if (!response.ok) {
        //                 throw new Error(response.message);
        //             }
        //
        //             return response.json()
        //         })
        //         // .then(response => {
        //         //     // Damit im Local Storage unter "user" keine "message" gespeichert wird
        //         //
        //         //
        //         //     return response;
        //         // })
        //
        //         .then(data => {
        //             localStorage.setItem(
        //                 "user",
        //                 JSON.stringify(data)
        //             );
        //             onLogin(data);
        //
        //             console.log(data)
        //         })
        //         .catch(error => {
        //             console.log(error.message);
        //             alert(error.message);
        //         });
        //
        // }

        return (
            <>
                <div className={"container login-container"}>
                    <h2>Sign in</h2>
                    <form onSubmit={login} className={"form-container"}>
                        <input
                            type={"text"}
                            value={name}
                            onChange={(event) => setName((event.target.value))}
                            // name={"username"}
                            placeholder={"Name"}/>
                        <input
                            type={"password"}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            name={"password"}
                            placeholder={"Password"}/>
                        <button type={"submit"}>Login</button>

                    </form>
                </div>

            </>
        );
    }
;

export default LoginPage;