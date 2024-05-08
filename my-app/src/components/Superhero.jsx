import {Link} from 'react-router-dom'
import { useHerosData } from "../hooks/useHerosData";


export const Superhero =() => {

const onSuccess = (data)=>{
  console.log('Perform side effect after data fetching',data);
}

const onError = (error)=>{
  console.log('Perform side effect after encountering error',error);
}
  const {isLoading,data,isError,error,isFetching,refetch}=useHerosData(onSuccess,onError)

console.log({isLoading,isFetching});
  if(isLoading || isFetching){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
    return (
      <div>
        <h1>Superhero</h1>
        <button onClick={refetch}>refresh</button>
    
        {data?.data.map((item)=>{
          return <div key={item.id}>
            <Link to={`/heros-details/${item.id}`}>{item.name}</Link>
          </div>
        })}

      </div>
    )
  }