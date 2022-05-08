import useSWR from 'swr'
import {api} from '../../Providers/HttpProvider/api';

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);

    return response.data.results;
  })

  return { data, error }
}
