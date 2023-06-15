import { Container, Profile } from "./styles"
import { Link } from "react-router-dom"

import { ButtonText } from  "../ButtonText"
import { Input } from  "../Input"


export function Header() {

  return(
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>

      <Input placeholder="Pesquisar pelo título" ></Input>
      
      <Profile to="/profile">
        <div>
          <Link to="/profile">
            <span>Leonardo Debattisti</span>
          </Link>

          <ButtonText title="sair" />
        </div>
        
        <Link to="/profile">
          <img
            src="http://github.com/Leodebat95.png"
            alt="Foto do usuário"
          />
        </Link>
      </Profile>
    </Container>
  )
}
