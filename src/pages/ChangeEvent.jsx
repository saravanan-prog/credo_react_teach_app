import { useState } from "react";

export default function ChangeEvent() {
  const [text, setText] = useState(null);

  return (
    <>
      <div>
        <label> Enter the text :</label>
        <input type="text" onChange={(e) => setText(e?.target?.value)} />
      </div>
      <div>
         <p> Show text : {text} </p>
      </div>
    </>
  );
}
