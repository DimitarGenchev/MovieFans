import {  } from "react";
import { login } from "../../api/auth-api"
import { useAuthContext } from "../../contexts/AuthContext";

const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData);

        return authData;
    };

    return loginHandler;
}

export default useLogin;