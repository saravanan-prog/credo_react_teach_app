
import styles from './home-page.module.css'

export default function Homepage(){



    return <div>
        <h1 className= {styles.title}>HomePage</h1>

        <p
          style =  {{color:"red",fontSize:"28px"} }
        > Welcome to React Js world</p>


        <p> developed By : <span style={{fontWeight:700}}>Saravanan</span></p>
         
    </div>
}