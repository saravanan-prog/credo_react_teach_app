
import styles from './home-page.module.css'
import { useLocation } from 'react-router'

export default function Homepage(){

    console.log("useLocaiton====>",useLocation())


    return <div>
        <h1 className= {styles.title}>HomePage</h1>

        <p
          style =  {{color:"red",fontSize:"28px"} }
        > Welcome to React Js world</p>


        <p> developed By : <span style={{fontWeight:700}}>Saravanan</span></p>
         
    </div>
}