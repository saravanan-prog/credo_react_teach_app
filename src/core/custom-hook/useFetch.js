import { useEffect, useState } from "react";

export default function useFetch(url){


    const [loading,setLoading] = useState(true)
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    useEffect(()=>{

        const apiCall = async () => {
            try{
                let response = await fetch(url)
                let responseData = await response.json()
                console.log("responseData===>",responseData)
                setData(responseData)

            }
            catch(error){
                setError("Something Went wrong !!!")
            }
            finally{
                setLoading(false)
            }
        }

        apiCall()
    },[url])


    return {
        loading,
        data,
        error
    }

}