import { logout } from "../../api/auth-api";
import { useAuthContext } from "../../contexts/AuthContext";

export const useLogout = () => {
    const { logout: localLogout  } = useAuthContext();

    const logoutHandler = async () => {
        await logout();
        localLogout();
    };

    return logoutHandler;
}