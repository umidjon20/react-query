import { useQuery, useQueryClient } from "react-query"
import axios from "axios"

const fetchUserData = ({queryKey}) => {
    const heroId = queryKey[1]
    return axios.get(`http://jsonplaceholder.typicode.com/users/${heroId}`)
}
export const useHeroDetails = (heroId) => {
    const queryClient =  useQueryClient()
    return useQuery( ['hero', heroId],  fetchUserData,{
        initialData: ()=>{
            const hero = queryClient.getQueryData('hero')?.data?.find(hero => hero.id === parseInt(heroId))
            if(hero){
                return {data: hero}
            }else{
                return undefined
            }
        }
    })
}