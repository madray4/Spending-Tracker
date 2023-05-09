import { useAuthContext } from "../hooks/useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove use from storage
    localStorage.removeItem('user');
    // update AuthContext
    dispatch({ type: 'LOGOUT' });
  };

  return { logout };
};