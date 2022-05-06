import { useFetch } from '../../Hooks/useFetch';

interface People {
   id: number;
   name: string;
 }

export const PeopleList = ()=> {
   const { data, error } = useFetch<People[]>('/people');
 
   if (!data) {
     return <p>Carregando...</p>
   }
 
    return (
       <>
         <ul>
            {data.map(people => (
               <li key={people.id}>
                  {people.name}
               </li>
            ))}
         </ul>
       </>
    )
  }
  