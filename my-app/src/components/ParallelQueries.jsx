import { useQuery } from "react-query"
import axios from "axios"

const fetchUsersData = ()=>{
    return axios.get('http://jsonplaceholder.typicode.com/users')
}

const fetchTodos = ()=>{
    return axios.get('http://jsonplaceholder.typicode.com/todos/10')
}
export const ParallelQueries = () => {
    useQuery('users',fetchUsersData)
    
    
  return (
    <div>
      parallllll
    </div>
  )
}


