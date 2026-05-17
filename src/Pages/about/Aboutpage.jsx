import styles from './aboutpage.module.css'

export default function AboutPage(){


    return <div>
        <div className = {styles.title}>About Page</div>
        <p style={{ color: "red", fontSize: "20px" }}> I am About page content </p>
        <p> Hello...</p>
        <h3> Example about page </h3>

        <button className = "btn btn-danger"> press me </button>
    </div>
}