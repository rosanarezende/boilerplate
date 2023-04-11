import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/react-logo.png";
import { useUserContext } from "../../../context/user";

export function Header() {
  const navigate = useNavigate();
  const { isLogged, logout } = useUserContext();

  return (
    <header>
      <div onClick={() => navigate("/")}>
        <img src={logo} alt="Logo React" />
        <h1> Rotas </h1>
      </div>

      <nav>
        {/* só aparece se o usuário estiver logado */}
        {isLogged ? (
          <>
            <button onClick={() => navigate("/profile")}> Profile </button>
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          // só aparece se o usuário não estiver logado
          <button onClick={() => navigate("/login")}> Login </button>
        )}

        <button className="back" onClick={() => navigate(-1) || navigate("/")}>
          &#x2190;
        </button>
      </nav>
    </header>
  );
}
