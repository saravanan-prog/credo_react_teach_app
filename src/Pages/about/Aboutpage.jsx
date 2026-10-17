import { useEffect, useState, useContext } from "react";
import styles from "./aboutpage.module.css";
import tamilContet from "../../assets/lang/tamil.json";
import englishContent from "../../assets/lang/en.json";

import { MainContext } from "../../context/contextStore";

export default function AboutPage() {
  const [pageContent, setPageContent] = useState("en");
  const {
    basicSetup: { mode, language },
  } = useContext(MainContext);

  useEffect(() => {
    if (language == "tl") setPageContent(tamilContet);
    else setPageContent(englishContent);
  }, []);

  return (
    <div className = {mode=='dark' ? styles.darkMode : styles.lightMode} >
      <p> {pageContent.about_lg} </p>
      <p> {pageContent.about_lg} </p>
      <p> {pageContent.about_lg} </p>
      <p> {pageContent.about_lg} </p>
      <p> {pageContent.about_lg}</p>
    </div>
  );
}
