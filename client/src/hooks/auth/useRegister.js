import { useContext } from "react";
import { register } from "../../api/auth-api";
import { AuthContext } from "../../contexts/AuthContext";

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);

        changeAuthState(authData);

        return result;
    };

    return registerHandler;
};