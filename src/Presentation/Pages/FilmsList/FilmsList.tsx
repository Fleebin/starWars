import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { Films } from "../../../Shared/Interfaces";
import {
  Title,
  SubTitle,
  Description,
  Container,
  Input,
  Main,
} from "../../Styles/styles";
import { Grid, Info, Card, Footer } from "../../Styles/Pages/List/styles";

export const FilmsList = () => {
  const { data } = useFetch<Films[]>("/films");
  const [search, setSearch] = useState("");

  const lowerSearch = search.toLowerCase();
  const filmFilter = data?.filter((film) =>
    film.title.toLowerCase().includes(lowerSearch)
  );

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Main>Filmes</Main>
      <Input
        placeholder="filtre por nome do filme"
        type="text"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <Grid>
        {filmFilter?.map((film, key) => (
          <Card key={key}>
            <Title>{film.title}</Title>
            <Description>Episódio {film.episode_id}</Description>
            <Info>
              <SubTitle>Informações</SubTitle>
              <Description>Lançado em: {film.release_date}</Description>
              <Description>Dirigido por: {film.director}</Description>
            </Info>
            <Footer>
              <Link className="link" to={`/films/${key + 1}`}>
                Ver detalhes
              </Link>
            </Footer>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};
