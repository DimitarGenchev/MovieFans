import { useContext } from "react";
import { register } from "../../api/auth-api";
import { AuthContext } from "../../contexts/AuthContext";

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const result = await register(email, password);

        changeAuthState(result);

        return result;
    };

    return registerHandler;
};