import { useQuery } from "react-query"
import axios from "axios"

const fetchUsersData = ()=>{
  return axios.get('http://jsonplaceholder.typicode.com/users')
}
export const Superhero =() => {
  const {isLoading,data,isError,error,isFetching}= useQuery(
    'users',fetchUsersData,
    {
      refetchOnMount:'always',
    }
    )
console.log({isLoading,isFetching});
  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
    return (
      <div>
        <h1>Superhero</h1>
        {data?.data.map((item)=>{
          return <div key={item.id}>{item.name}</div>
        })}

      </div>
    )
  }