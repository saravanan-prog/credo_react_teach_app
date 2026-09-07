import english from '../lang/en.json'
import tamil from '../lang/tamil.json'
import malayalam from '../lang/malayalam.json'
import { useEffect, useState } from 'react'
import axios from 'axios'



export const useOtp = (digit) => {

    if(digit == 5)
       return Math.floor(10000 + Math.random() * 90000)
    else
       return Math.floor(100 + Math.random() * 900)

}

export const useLanguage = (code) =>{
    
    if(code == 'tml'){
        return tamil
    }
    if(code == 'ml'){
        return malayalam
    }
    else{
        return english
    }
}

export const useFetch = (url) => {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [data,setData] = useState([])

    useEffect(()=>{
        
        apiCall(url)

    },[url])

    const apiCall = async (url) => {
        try{
            let response = await axios.get(url)
            response && setData(response.data)
            setLoading(false)
        }
        catch(e){
            setError(true)
        }
    }

    return {
        loading : loading,
        error : error,
        data : data

    }
}