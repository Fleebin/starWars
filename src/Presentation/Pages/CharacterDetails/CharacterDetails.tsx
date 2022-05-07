import React from "react";
import { useParams } from "react-router-dom";
import { useDetails } from "../../Hooks/useDetails";
import { Character } from "../../../Shared/Interfaces";

export const CharacterDetails = () => {
  const { id } = useParams();
  const { data } = useDetails<Character>(`people/${id}`);

  if (!data) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <ul>
        <li>Name: {data.name}</li>
      </ul>
    </>
  );
};
