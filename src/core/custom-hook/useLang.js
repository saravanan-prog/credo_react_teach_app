import tamilLang from '../lang/tamil.json'
import enLang from '../lang/en.json'
import { useEffect, useState } from 'react'

export default function useLang(langType = 'en'){
    const [content,setContent] = useState(langType)


    useEffect(()=>{
        if(langType == 'tamil'){
            setContent(tamilLang)
        }
        else{
            setContent(enLang)
        }
    },[langType])


    return content
}