import { useState } from 'react';
import {Link} from 'react-router-dom'
import { useAddUsers, useHerosData } from "../hooks/useHerosData";


export const Superhero =() => {
  const [name,setName]=useState('')
  const [username,setUserName]= useState('')


const onSuccess = (data)=>{
  console.log('Perform side effect after data fetching',data);
}

const onError = (error)=>{
  console.log('Perform side effect after encountering error',error);
}
const { mutate:add } = useAddUsers()

const handleSubmit =()=>{
  console.log({name,username});
  const user = {name,username}
  add(user)
}

  const {isLoading,data,isError,error,isFetching,refetch} = useHerosData(onSuccess,onError)

console.log({isLoading,isFetching});
  if(isLoading ){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
    return (
      <div>
        <h1>Usernames</h1>
      <div>
        <input type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)} />
        <input type="text"
        value={username}
        onChange={(e)=>setUserName(e.target.value)} />
        <button onClick={handleSubmit}>Add hero</button>
      </div>
        { data?.data.map((item)=>{
          return <div key={item.id}>
            <Link to={`/heros-details/${item.id}`}>{item.name}</Link>
          </div>
        })}

        <button onClick={refetch}>refresh</button>
      </div>
    )
  }