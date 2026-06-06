import tamil from "../lang/tamil.json";
import english from "../lang/en.json";
import malayalam from "../lang/malayalam.json";


export function useLang(prefferedLang) {
  if (prefferedLang === "tn") return tamil;
  else if (prefferedLang === "ml") return malayalam;
  else if (prefferedLang === "en") return english;
}

export function useRandom() {
  return Math.floor(Math.random() * 9000);
}
