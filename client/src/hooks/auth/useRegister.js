import { register } from "../../api/auth-api";
import { useAuthContext } from "../../contexts/AuthContext";

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, username, password) => {
        const { password: _, ...authData } = await register(email, username, password);

        changeAuthState(authData);

        return authData;
    };

    return registerHandler;
};