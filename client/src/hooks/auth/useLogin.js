import { useContext } from "react";
import { login } from "../../api/auth-api"
import { AuthContext } from "../../contexts/AuthContext";

const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData);

        return authData;
    };

    return loginHandler;
}

export default useLogin;