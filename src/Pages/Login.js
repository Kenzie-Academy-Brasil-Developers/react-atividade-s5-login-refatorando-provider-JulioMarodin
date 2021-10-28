import { useState } from "react";
// import "./style.css";
import { useAuth } from "../Components/Providers/Auth";
import LoginForm from "../Components/Login";

function Login() {
  const { singIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const userData = { email, password };
    singIn(userData);
  };
  return (
    <div className="Container">
      <LoginForm
        callback={handleLogin}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
}
export default Login;
