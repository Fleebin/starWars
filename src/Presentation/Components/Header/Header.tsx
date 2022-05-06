
import { Link } from "react-router-dom"

export const Header = ()=> {

    return (
     <>
        <nav>
            <Link to="people">Personagens</Link>
            <Link to="films">Filmes</Link>
        </nav>
     </>
  )
}
