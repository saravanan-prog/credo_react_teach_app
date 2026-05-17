
import styles from './homepage.module.css'

export default function Homepage(){



    return <div>
        <h1 className = {styles.title}>HomePage</h1>

        <p> Welcome to React Js world</p>
        <p id={styles.contenet}> developed By : <span >Saravanan</span></p>

        <button className = "btn btn-primary"> click me </button>
         
    </div>
}