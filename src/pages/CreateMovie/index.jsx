import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { MovieItem } from "../../components/MovieItem"


export function CreateMovie() {

  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <ButtonText title="Voltar" icon={FiArrowLeft} id="button-text" />
            </Link>

            <h1>Novo filme</h1>
          </header>

          <div id="inline-inputs">
            <Input placeholder="Título" />

            <Input 
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0" max="5"
            />
          </div>

          <Textarea placeholder="Observações" />

          <Section id="section" title="Marcadores">
            <div id="external-bkg">
              <MovieItem value="Diretor" />

              <MovieItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <div id="final-buttons">
            <Button title="Excluir filme" id="black-btn" />

            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}
