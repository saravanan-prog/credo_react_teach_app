import { useEffect, useState } from "react";

export default function useFetch(url){

    const [data,setData] = useState("Loading....")
    const [error,setError] = useState(null)

    useEffect(()=>{
        const apiCall = async () => {
            try{
                let response = await fetch(url)
                let responseData = await response.json()
                setData(responseData)

            }
            catch(error){
                setError(error?.message)
            }
        }

        apiCall()
    },[url])


    return {
        data,
        error
    }

}