import { useQuery } from "react-query"
import axios from "axios"

const fetchUserData = heroId => {
    return axios.get(`http://jsonplaceholder.typicode.com/users/${heroId}`)
}
export const useHeroDetails = (heroId) => {

    return useQuery( ['hero', heroId], () => fetchUserData(heroId))
}