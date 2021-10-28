import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

interface LoginProvider {
  authToken: string;
  singIn: (userData: Login) => void;
  logout: () => void;
}
interface LoginProps {
  children: ReactNode;
}
interface Login {
  userData: object;
}
const AuthContext = createContext<LoginProvider>({} as LoginProvider);

export const AuthProvider = ({ children }: LoginProps) => {
  const history = useHistory();
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@Login_token") || ""
  );

  const singIn = (userData: Login) => {
    console.log(userData);
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        localStorage.setItem("@Login_token", response.data.token);
        setAuthToken(response.data.token);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    console.log("rodou logout");
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, singIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
