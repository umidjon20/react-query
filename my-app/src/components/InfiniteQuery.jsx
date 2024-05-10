
import { useInfiniteQuery } from "react-query"
import axios from "axios"
import { Fragment } from "react"

const fetchPages =({pageParam=1})=>{
    return axios.get(`http://jsonplaceholder.typicode.com/users?_limit=2&_page=${pageParam}`)
}
export const InfiniteQuery=()=>{
    
    const {isLoading,isError,data,error,hasNextPage,fetchNextPage,isFetching,isFetchingNextPage}=useInfiniteQuery(
        ['users'],
        fetchPages,
    {
        getNextPageParam:(_lastPage,pages)=>{
            if(pages.length < 4){
                return pages.length+1
            }else{
                return undefined
            }
        }
    })

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>{error.message}</h1>
    }
    return(
        <div>
            <h1>Infinite query</h1>
            {
                data?.pages.map((items,i)=>{
                    return(
                        <Fragment key={i}>
                            {items.data.map(item=>(
                                <h2 key={item.id}>{item.id}. {item.name}</h2>
                            ))}
                        </Fragment>
                    )
                })
             }
             <div>
                <button
                onClick={fetchNextPage}
                disabled={!hasNextPage}
                >Load more</button>
               
             </div>
             <div>{isFetching && !isFetchingNextPage ? 'Loading...' : null}</div>
            
        </div>
    )
} 