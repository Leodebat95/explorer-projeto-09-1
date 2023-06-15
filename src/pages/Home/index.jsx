import { FiPlus } from "react-icons/fi"

import { Container, Title, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movie"


export function Home() {

  return(
    <Container>
      <Header />

      <Title>
        <h1>Meus filmes</h1>

        <Button title="Adicionar filme" icon={FiPlus} to="/new_movie" />
      </Title>

      <Content>
        <Movie to="/details/:interestellar" data={{
          title: "Interestellar",
          rating: "4",
          plot: `
            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. 
            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto 
            está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência 
            desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que 
            os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca 
            foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. 
            As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro 
            Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para 
            pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, 
            a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper 
            devasta Murphy.
            Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico 
            planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que 
            o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale 
            a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por 
            ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando 
            a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
            `,
          tags: [
            {id: '1', name: 'Ficção Científica'},
            {id: '2', name: 'Christopher Nolan'},
            {id: '3', name: 'Anne Hathaway'}
          ]
        }} />

        <Movie data={{
          title: "Avatar",
          rating: "3",
          plot: `
            Jake Sully (Sam Worthington) ficou paraplégico após um combate na Terra. Ele é selecionado para participar do programa Avatar 
            em substituição ao seu irmão gêmeo, falecido. Jake viaja a Pandora, uma lua extraterrestre, onde encontra diversas e estranhas 
            formas de vida. O local é também o lar dos Na'Vi, seres humanóides que, apesar de primitivos, possuem maior capacidade física 
            que os humanos. Os Na'Vi têm três metros de altura, pele azulada e vivem em paz com a natureza de Pandora. Os humanos desejam 
            explorar a lua, de forma a encontrar metais valiosos, o que faz com que os Na'Vi aperfeiçoem suas habilidades guerreiras. Como 
            são incapazes de respirar o ar de Pandora, os humanos criam seres híbridos chamados de Avatar. Eles são controlados por seres 
            humanos, através de uma tecnologia que permite que seus pensamentos sejam aplicados no corpo do Avatar. Desta forma Jake pode 
            novamente voltar à ativa, com seu Avatar percorrendo as florestas de Pandora e liderando soldados. Até conhecer Neytiri (Zoe 
            Saldana), uma feroz Na'Vi que conhece acidentalmente e que serve de tutora para sua ambientação na civilização alienígena.
            `,
          tags: [
            {id: '1', name: 'Ficção Científica'},
            {id: '2', name: 'James Cameron'},
            {id: '3', name: 'Zoe Saldana'}
          ]
        }} />

        <Movie data={{
          title: "Velozes e Furiosos",
          rating: "4",
          plot: `
            Ambientado em Los Angeles, nos Estados Unidos, o primeiro filme da franquia Velozes e Furiosos acompanha a trajetória do 
            policial Brian O'Conner (Paul Walker), responsável por investigar e prender uma gangue de saqueadores de produtos eletrônicos. 
            O grupo de criminosos procurado pelo FBI é comandado por Dominic Toretto (Vin Diesel), que atende pelo apelido de Dom, conhecido 
            por envolver-se em corridas de rua ilegais. Para reunir provas e deter Dom, Brian é orientado a infiltrar-se disfarçado na gangue. 
            Para ganhar seu espaço entre os criminosos, o policial novato tem de provar suas habilidades de combate e de condução em alta 
            velocidade. Enquanto ganha a confiança do líder da gangue, Brian envolve-se com a irmã dele, Mia (Jordana Brewster). O 
            relacionamento coloca-o em uma situação difícil, na qual tem de escolher entre trair a confiança de Dom ou honrar com suas 
            responsabilidades enquanto policial. O trailer do filme deixa um alerta: "Se laços de lealdade precisam ser quebrados, seja 
            veloz e furioso". O longa-metragem inspirado no artigo Racer X, publicado na revista norte-americana Vibe, foi responsável por 
            lançar Vin Diesel e Paul Walker no mundo do cinema.
            `,
          tags: [
            {id: '1', name: 'Policial'},
            {id: '2', name: 'Rob Cohen'},
            {id: '3', name: 'Paul Walker'}
          ]
        }} />

        <Movie data={{
          title: "De Volta para o Futuro",
          rating: "5",
          plot: `
            Marty McFly (Michael J. Fox) é um adolescente entediado com suas relações em casa e na escola. Seu melhor amigo é o excêntrico 
            dr. Brown (Christopher Lloyd), um cientista maluco e muito criativo que está trabalhando em uma máquina do tempo. Com a invenção 
            do Dr. Brown, Marty acidentalmente volta aos anos 50, quando ainda não havia nascido. Ele reencontra muitas pessoas que conhece, 
            só que bem mais jovens, como sua mãe, que se apaixona por ele. A presença de Marty no passado cria confusões e acaba modificando 
            o futuro. Agora, ele terá de reaproximar seus pais e arranjar um jeito de voltar aos anos 80.
            `,
          tags: [
            {id: '1', name: 'Aventura'},
            {id: '2', name: 'Robert Zemeckis'},
            {id: '3', name: 'Michael J. Fox'}
          ]
        }} />

        <Movie data={{
          title: "La La Land",
          rating: "2",
          plot: `
            Ao chegar em Los Angeles o pianista de jazz Sebastian (Ryan Gosling) conhece a atriz iniciante Mia (Emma Stone) e os dois se 
            apaixonam perdidamente. Em busca de oportunidades para suas carreiras na competitiva cidade, os jovens tentam fazer o relacionamento 
            amoroso dar certo enquanto perseguem fama e sucesso. John Legend, Rosemarie DeWitt, Finn Wittrock, and J. K. Simmons aparecem como 
            coadjuvantes. O título é uma referência à cidade na qual o filme é ambientado e ao termo Lalaland, que significa estar fora da realidade. 
            Na cerimônia do Oscar 2017, obteve 14 indicações, assim se igualando ao recorde de All About Eve (1950) e Titanic (1997) como os filmes 
            mais indicados da história do prêmio. Ao todo, o filme foi vencedor de seis estatuetas.
            `,
          tags: [
            {id: '1', name: 'Romance'},
            {id: '2', name: 'Damien Chazelle'},
            {id: '3', name: 'Ryan Gosling'}
          ]
        }} />
      </Content>
    </Container>
  )
}
