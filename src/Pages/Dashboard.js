import "./styles.css";
import { useAuth } from "../Components/Providers/Auth";

function Dashboard() {
  const { logout } = useAuth();
  const handleLogout = () => {
    console.log("entrou");
    logout();
  };
  return (
    <section>
      <div className="container">
        <img
          src={"https://veja.abril.com.br/wp-content/uploads/2019/12/1.jpg"}
          alt="Kenzie Logo"
        />
        <h1>Bem vindo</h1>
        <button className="Button Primary Shadow" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </section>
  );
}
export default Dashboard;
