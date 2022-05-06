import { useState } from 'react';
import { useFetch } from '../../Hooks/useFetch';
interface Films {
   episode_id: number;
   title: string;
 }

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
            {filmFilter?.map(film => (
               <li key={film.episode_id}>
                  {film.title}
               </li>
            ))}
         </ul>
       </>
    )
  }
  