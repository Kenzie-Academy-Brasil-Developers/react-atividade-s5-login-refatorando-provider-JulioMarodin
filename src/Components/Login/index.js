import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./styles.css";

const LoginForm = ({ callback, email, setEmail, password, setPassword }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div>
      <form onSubmit={handleSubmit(callback)}>
        {errors.email && <span>{errors?.email.message}</span>}
        <input
          {...register("email")}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
        />
        {errors.password && <span>{errors?.password.message}</span>}
        <input
          {...register("password")}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          value={password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
