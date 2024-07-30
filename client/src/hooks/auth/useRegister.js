import { register } from "../../api/auth-api";
import { useAuthContext } from "../../contexts/AuthContext";

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);

        changeAuthState(authData);

        return authData;
    };

    return registerHandler;
};