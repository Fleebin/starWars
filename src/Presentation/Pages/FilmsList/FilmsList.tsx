import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import {Films} from '../../../Shared/Interfaces'


export const FilmsList = ()=> {
   const { data } = useFetch<Films[]>('/films');
   const [search, setSearch] = useState('');

   const lowerSearch = search.toLowerCase();
   const filmFilter = data?.filter((film) => film.title.toLowerCase().includes(lowerSearch));

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
            {filmFilter?.map((film, key) => (
               <li key={key}>
                  <Link to={`/films/${key+1}`}>
                     {film.title}
                  </Link>
               </li>
            ))}
         </ul>
       </>
    )
  }
  