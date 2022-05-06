import { useFetch } from '../../Hooks/useFetch';
interface Films {
   episode_id: number;
   title: string;
 }

export const FilmsList = ()=> {
   const { data, error } = useFetch<Films[]>('/films');
 
   if (!data) {
     return <p>Carregando...</p>
   }
 
    return (
       <>
         <ul>
            {data.map(film => (
               <li key={film.episode_id}>
                  {film.title}
               </li>
            ))}
         </ul>
       </>
    )
  }
  