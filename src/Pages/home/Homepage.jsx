
import styles from './home-page.module.css'
import { MainContext } from '../../core/context/gernalContext'
import { useContext } from 'react'

export default function Homepage(){

    const {language,theme} = useContext(MainContext)

    


    return <div className = {theme =="dark" ? "bg-dark text-white" : "bg-white"} >
        <h1 className= {styles.title}>HomePage</h1>

        <p
          style =  {{color:"red",fontSize:"28px"} }
        > 
            {language =='en' ? " Welcome to React Js world" : "வணக்கம்! React JS உலகத்தில் வேலை செய்ய தேவையான தமிழ் உள்ளடக்கம் இதோ 😊"}
        
        
        
        </p>


        <p> developed By : <span style={{fontWeight:700}}>Saravanan</span></p>
         
    </div>
}