import { Link } from "react-router-dom";
import { Nav } from "../../Styles/styles";
import logo from "../../Assets/Images/logo.png";

export const Header = () => {
  return (
    <>
      <Nav>
        <Link className="link" to="character">
          Personagens
        </Link>
        <Link className="link" to="films">
          Filmes
        </Link>
        <Link className="form" to="register">
          Cadastrar-se
        </Link>
      </Nav>
    </>
  );
};
