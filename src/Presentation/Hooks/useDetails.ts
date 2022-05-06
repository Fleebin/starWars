import useSWR from 'swr'
import {api} from '../../Providers/HttpProvider/api';
export function useDetails<Data = any, Error = any>(url: string) {
    const { data, error } = useSWR<Data, Error>(url, async url => {
      const response = await api.get(url);
  
      return response.data;
    })
  
    return { data, error }
  }