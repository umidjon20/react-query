import { useParams } from "react-router-dom"
import { useHeroDetails } from "../hooks/useHeroDetails"

export const HerosDetails =() => {
    const {heroId } =useParams()
    const {isLoading,isError,data,error}=useHeroDetails(heroId)
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    return(
        <div>
            {data?.data.name} -{data?.data.phone}
        </div>
        )
}