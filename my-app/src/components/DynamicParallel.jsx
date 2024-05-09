import { useQueries } from "react-query"
import axios from "axios"

const fetchUsersData = (heroId)=>{
    return axios.get(`http://jsonplaceholder.typicode.com/users/${heroId}`)
}

export const DynamicParallel = ({heroId}) => {
    const queryRes =  useQueries(
        heroId.map(id=>{
            return {
                queryKey:['users',id],
                queryFn:()=> fetchUsersData(id),
            }
        })
    )
    console.log({queryRes});
  return (
    <div>
      DynamicParallel
    </div>
  )
}