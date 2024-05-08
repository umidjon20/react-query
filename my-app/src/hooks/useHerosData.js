import { useQuery } from "react-query"
import axios from "axios"
const fetchUsersData = ()=>{
  return axios.get('http://jsonplaceholder.typicode.com/users')
}
export const useHerosData=(onSuccess,onError)=>{
   return useQuery(
        'users',fetchUsersData,
        {
          onSuccess,
          onError,
          
        }
        )
}