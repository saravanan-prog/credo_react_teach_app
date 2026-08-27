import { useEffect } from "react";
import styles from "./aboutpage.module.css";

export default function AboutPage() {
  useEffect(() => {
    console.log("styles====>", styles);
  }, []);

  return (
    <>
      <div>
        <h1 class={styles.title}> About Page </h1>

        <p id ={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde beatae
          magnam earum optio ad voluptas molestiae nemo corrupti, consectetur
          illo illum. Voluptatum ad dicta dolores cum suscipit neque amet rem!
        </p>
      </div>
    </>
  );
}
