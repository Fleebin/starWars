import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import {Character} from '../../../Shared/Interfaces'


export const CharactersList = ()=> {

   const { data } = useFetch<Character[]>('/people');

   const [search, setSearch] = useState('');

   const lowerSearch = search.toLowerCase();

   const charactersFilter = data?.filter((character) => character.name
   .toLowerCase()
   .includes(lowerSearch));

   if (!data) {
     return <p>Carregando...</p>
   }

   return (
       <>
       <input type="text"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
         />
         <ul>
            {charactersFilter?.map((character, key) => (
               <li key={key}>
                  <Link to={`/character/${key+1}`}>
                     {character.name}
                  </Link>
               </li>
            ))}
         </ul>
       </>
    )
  }
  