import { useContext } from "react";
import { login } from "../../api/auth-api"
import { AuthContext } from "../../contexts/AuthContext";

const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result = await login(email, password);

        changeAuthState(result);

        return result
    };

    return loginHandler;
}

export default useLogin;