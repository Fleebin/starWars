
import { Link } from "react-router-dom"

export const Header = ()=> {

    return (
     <>
        <nav>
            <Link to="character">Personagens</Link>
            <Link to="films">Filmes</Link>
            <Link to="register">Cadastrar-se</Link>
        </nav>
     </>
  )
}
