import React from "react";
import { useParams } from "react-router-dom";
import { useDetails } from "../../Hooks/useDetails";
import { Character } from "../../../Shared/Interfaces";
import {
  CardInfo,
  Grid,
  CardVei,
  CardFilms,
  Main,
} from "../../Styles/Pages/CharDetails/styles";
import { Title, Description, Container } from "../../Styles/styles";

export const CharacterDetails = () => {
  const { id } = useParams();
  const { data } = useDetails<Character>(`people/${id}`);

  if (!data) {
    return <p>Carregando...</p>;
  }
  return (
    <Container>
      <Main>{data.name}</Main>
      <Grid>
        <CardInfo>
          <Title>Informações físicas</Title>
          <div className="flex">
            <Description>Espécie: {data.species}</Description>
            <Description>Altura: {data.height}</Description>
            <Description>Peso: {data.mass}</Description>
            <Description>Cor do cabelo: {data.hair_color}</Description>
          </div>
        </CardInfo>
        <CardVei>
          <Title>Veículos e naves utilizados</Title>
          <div className="flex">
            <Description>Espécie: {data.species}</Description>
            <Description>Altura: {data.height}</Description>
          </div>
          <div className="flex">
            <Description>Espécie: {data.species}</Description>
            <Description>Altura: {data.height}</Description>
          </div>
        </CardVei>
        <CardFilms>
          <Title>Aparições em filmes</Title>
          <Description>Espécie: {data.species}</Description>
          <Description>Altura: {data.height}</Description>
          <Description>Peso: {data.mass}</Description>
          <Description>Cor do cabelo: {data.hair_color}</Description>
        </CardFilms>
      </Grid>
    </Container>
  );
};
