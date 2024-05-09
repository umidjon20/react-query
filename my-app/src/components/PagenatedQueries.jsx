import { useState } from "react"
import { useQuery } from "react-query"
import axios from "axios"

const fetchPages =(pageNum)=>{
    return axios.get(`http://jsonplaceholder.typicode.com/users?_limit=2&_page=${pageNum}`)
}
export const PagenatedQueries=()=>{
    const [pageNumber,setPageNumber]= useState(1)
    const {isLoading,isError,data,error,isFetching}=useQuery(['users',pageNumber],()=>fetchPages(pageNumber),
    {
        keepPreviousData:true,
    })

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>{error.message}</h1>
    }
    return(
        <div>
            <h1>Pagenation</h1>
            {
                data?.data.map((items)=>{
                    return(
                        <div key={items.id}>
                            <h2>{items.id}. {items.name}</h2>
                        </div>
                    )
                })
             }
             <div>
                <button
                onClick={()=>setPageNumber(page=> page-1)}
                disabled={pageNumber===1}
                >Prev page</button>
                <button
                onClick={()=>setPageNumber(page=> page+1)}
                disabled={pageNumber===4}
                >Next page</button>
             </div>
             <div>{isFetching && 'Loading...'}</div>
        </div>
    )
} 