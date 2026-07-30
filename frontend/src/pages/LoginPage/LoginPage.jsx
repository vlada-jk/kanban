import "./LoginPage.css";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../services/api.js";


const LoginPage = ({onLogin}) => {
        const navigate = useNavigate();
        const [name, setName] = useState("");
        const [password, setPassword] = useState("");
        const login = async (event) => {
            event.preventDefault();

            if (!name || !password) return;

            try {
                const data = await loginUser({
                    name,
                    password
                });

                localStorage.setItem(
                    "user",
                    JSON.stringify(data)
                );

                onLogin(data);
                navigate("/projects");

            } catch (error) {
                alert(error.message);
            }
        };



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

                        <p>
                            No account? <Link to="/register">Register</Link>
                        </p>

                    </form>
                </div>

            </>
        );
    }
;

export default LoginPage;