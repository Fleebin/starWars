import Axios from 'axios';
import useSWR from 'swr'
import {api} from '../../Providers/HttpProvider/api';
import { Character } from '../../Shared/Entites/Character/Character';

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);

    const responseFormated = await Promise.all(
      response.data.results?.map(async (char: Character) => {
        
        const homeworld = await Axios.get(char.homeworld);
        // const vehicles = await Axios.get(char?.vehicles[0]);
        // const starships = await Axios.get(char?.starships[0]);
        // const species = await Axios.get(char?.species[0]);
        return {
          ...char,
          homeworldFormated: homeworld.data.name,
          // vehiclesFormated: vehicles.data.name,
          // starshipsFormated: starships.data.name,
          // speciesFormated: species.data.name,
        }
      })

    );
    
    return responseFormated;
  })

  return { data, error }
}