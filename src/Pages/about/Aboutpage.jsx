
import { useContext,useEffect,useState } from "react"
import { BasicPagesettingcontext } from "../../core/context/genralContext"
import Lang_tamil from '../../core/lang/tamil.json'
import Lang_En from '../../core/lang/en.json'
import styles from './aboutpage.module.css'



export default function AboutPage(){
    
    const {language,themeMode} = useContext(BasicPagesettingcontext).basicPageSetup

    const[content,setContent] = useState()

    useEffect(()=>{

        if(language !="en")
            setContent(Lang_tamil)
        else
            setContent(Lang_En)
    },[])

    return <div className = { themeMode !="dark" ? styles.lightMode :  styles.darkMode }>

         <h1> {content?.about_lg}   </h1>
         <p> {content?.ceo_name_lg} </p>
  
    </div>

}