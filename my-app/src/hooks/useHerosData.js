import { useQuery,useMutation,useQueryClient } from "react-query"
import { request } from "../utils/axios-utils"
import axios from "axios"
const fetchUsersData = ()=> {
  // return axios.get('http://jsonplaceholder.typicode.com/users')
  return request({url:'/users'})
}

const addUser = (user) => {
  // return axios.post('http://jsonplaceholder.typicode.com/users',user)
  return request({url:'/users',method:'post',data:user})
}
export const useHerosData=(onSuccess,onError)=>{
   return useQuery(
        'users',fetchUsersData,
        {
          onSuccess,
          onError,
          
        }
        )
}

export const useAddUsers = () => {
  const queryClient = useQueryClient()
  return useMutation(addUser,{
    // onSuccess:(data)=>{
    //   // queryClient.invalidateQueries('users')
    //   // inputdan malumotni olganda apiga zapros junatmasdan qushadi
    //   queryClient.setQueryData('users',(oldQueryData)=>{
    //     return {
    //       ...oldQueryData
    //       ,data:[...oldQueryData.data, data.data]
    //     }
    //   })
    // }
    onMutate: async (newUser) => {
      await queryClient.cancelQueries('users')
      const previousUsers = queryClient.getQueryData('users')
      queryClient.setQueryData('users',(oldQueryData)=>{
            return {
              ...oldQueryData
              ,data:[...oldQueryData.data, {
                id:oldQueryData?.data?.length + 1,
                ...newUser
              }]
            }
          })
          return {
            previousUsers
          }
    },
    onError: (_error, _newUser, context) => {
      queryClient.setQueriesData('users', context.previousUsers)
    },
    onSettled: () => {
      queryClient.invalidateQueries('users')
    }

  })
}