import { useState,useEffect } from "react"
import axios from "axios"
export const RQSuperHero =() => {
    const [isLoading, setIsloading] =useState(true)
    const [data,setData]=useState([])
    const [error,setError] =useState('')
    useEffect(()=>{
        axios.get('http://jsonplaceholder.typicode.com/users').then((res)=>{
            setData(res.data)
            setIsloading(false)
        }).catch((error)=>{
            setError(error.message)
            setIsloading(false)
        })
    },[])
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }
    return (
      <div>
        <h1>Super hero page</h1>
        {
            data.map((item,id)=>{
                return <div key={id}>{item.name}</div>
            })
        }
      </div>
    )
  }