import React from "react";
import { useParams } from "react-router-dom";
import { useDetails } from "../../Hooks/useDetails";
import { Films } from "../../../Shared/Interfaces";
import {
  CardChars,
  Grid,
  CardTec,
  CardSin,
  Main,
} from "../../Styles/Pages/FilmDetails/styles";
import { Title, SubTitle, Description, Container } from "../../Styles/styles";

export const FilmDetails = () => {
  const { id } = useParams();
  const { data } = useDetails<Films>(`films/${id}`);

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Container>
        <Main>{data.title}</Main>
        <SubTitle>Episódio {data.episode_id}</SubTitle>
        <Grid>
          <CardSin>
            <Title>Sinopse</Title>
            <div className="flex">
              <Description>{data.opening_crawl}</Description>
            </div>
          </CardSin>
          <CardTec>
            <Title>Ficha técnica</Title>
            <SubTitle>Diretor </SubTitle>
            <Description>{data.director}</Description>
            <SubTitle>Produtores </SubTitle>
            <Description>{data.producer}</Description>
            <SubTitle>Lançamento </SubTitle>
            <Description>{data.release_date}</Description>
          </CardTec>

          <CardChars>
            <Title>Aparecem nesse filme</Title>
            <SubTitle>Personagens</SubTitle>
            <SubTitle>Espécies</SubTitle>
            <SubTitle>Veículos</SubTitle>
            <SubTitle>Naves</SubTitle>
            <SubTitle>Planetas</SubTitle>
          </CardChars>
        </Grid>
      </Container>
    </>
  );
};
