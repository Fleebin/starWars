import { useState } from 'react';
import { useFetch } from '../../Hooks/useFetch';

interface People {
   id: number;
   name: string;
 }

export const PeopleList = ()=> {
   const { data } = useFetch<People[]>('/people');
   const [search, setSearch] = useState('');

   const lowerSearch = search.toLowerCase();
   const peoplesFilter = data?.filter((people) => people.name.toLowerCase().includes(lowerSearch));

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
            {peoplesFilter?.map(people => (
               <li key={people.name}>
                  {people.name}
               </li>
            ))}
         </ul>
       </>
    )
  }
  