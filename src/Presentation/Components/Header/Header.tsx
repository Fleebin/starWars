import { Link } from "react-router-dom";
import { Nav } from "../../Styles/styles";

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
