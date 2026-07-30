import {loginUser, registerUser} from "../services/authService.js";

const register = async (request, response) =>{
    try {
        const {name, password} = request.body;
        const result = await registerUser(name, password);
        response.json(result);


    } catch (error) {

        response.status(500).json({
            message: error.message
        });
    }
}



const login = async (request, response) => {

    try {

        const {name, password} = request.body;
        // const name = request.body.name;
        // const password = request.body.password;

        const user = await loginUser(name, password);

        if (!user) {
            return response.status(401).json({
                message: "Name or password is wrong!"
            });
        }

        response.json({
            id: user._id,
            name: user.name,
        });


    } catch(error) {
        console.log(error);
        response.status(500).json({
            message: error.message
        });
    }
}

export { login , register };