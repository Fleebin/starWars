import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetchChar";
import { Character } from "../../../Shared/Interfaces";
import {
  Title,
  SubTitle,
  Description,
  Container,
  Input,
} from "../../Styles/styles";
import { Grid, Info, Card, Footer } from "../../Styles/Pages/List/styles";

export const CharactersList = () => {
  const { data } = useFetch<Character[]>("/people");
  const [search, setSearch] = useState("");
  const lowerSearch = search.toLowerCase();

  const charactersFilter = data?.filter((character) =>
    character.name.toLowerCase().includes(lowerSearch)
  );

  if (!data) {
    return <Description>Carregando...</Description>;
  }
  return (
    <Container>
      <Input
        placeholder="filtre por nome do personagem"
        type="text"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <Grid>
        {charactersFilter?.map((character, key) => (
          <Card key={key}>
            <Title>{character.name}</Title>
            <Info>
              <SubTitle>Nascimento</SubTitle>
              <Description>{character.birth_year}</Description>
              <Description>{character.homeworldFormated}</Description>
            </Info>
            <Info>
              <SubTitle>Descrição fisica</SubTitle>
              {/* <Description>{character.species}</Description>
              <Description>{character.height}</Description> */}
            </Info>
            <Info>
              <SubTitle>Veículos usados</SubTitle>
              {/* <Description>{character.vehicles}</Description>
              <Description>{character.starships}</Description> */}
            </Info>
            <Footer>
              <Link className="link" to={`/character/${key + 1}`}>
                Ver detalhes
              </Link>
            </Footer>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};
