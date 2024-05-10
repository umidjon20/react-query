import axios from "axios";

const client = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com"
})
 export  const  request =  ({...options}) => {
    //buni olib tashlasam ishlayabti
    // client.defaults.headers.common.Authorization = `Bearer token`
    const OnSuccess = (response) => response
    const OnError = (error) => {
        return error
    }
    return client(options).then(OnSuccess).catch(OnError)
}