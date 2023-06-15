import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Container, Form, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"


export function SignUp() {

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Link>
          <Button title="Cadastrar" />
        </Link>

        <Link to="/">
          <ButtonText title="Voltar para o login" icon={FiArrowLeft}/>
        </Link>
      </Form>

      <Background />
    </Container>
  )
}
