import Axios from 'axios';
import useSWR from 'swr'
import {api} from '../../Providers/HttpProvider/api';
import { Character } from '../../Shared/Interfaces';

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);

    const responseFormated = await Promise.all(
      response.data.results?.map(async (char: Character) => {
        
        const homeworld = await Axios.get(char.homeworld)
        // const vehicles = await console.log(char.vehicles)
        // const starships = await console.log(char.starships[0])
        return {
          ...char, homeworldFormated: homeworld.data.name,
        }
      })
    );
    return responseFormated;
  })

  return { data, error }
}