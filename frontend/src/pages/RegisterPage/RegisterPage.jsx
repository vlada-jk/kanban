import "./RegisterPage.css";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import {registration} from "../../services/api.js";

const RegisterPage = () => {


    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const register = async (event)=>{
        event.preventDefault();

        if (!name || !password) return;

        try {
            const user = await registration({name, password});
            console.log(user);
            navigate("/login");


        } catch (error){
            console.log(error);
            alert("Registration failed");
        }

    }


        return (
            <>
                <div className={"container register-container"}>
                    <h2>Sign up</h2>

                    <form onSubmit={register}>

                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                        />

                        <button type="submit">
                            Register
                        </button>
                        <p>
                            Already have an account?
                            <Link to="/login">Login</Link>                        </p>

                    </form>
                </div>

            </>
        );
    }
;

export default RegisterPage;