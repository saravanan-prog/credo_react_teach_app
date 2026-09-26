import { useState } from "react";

export default function A_InputChangeEvent() {
  
  const [text, setText] = useState(null);


  return (
    <>
      <div>
        <label> Enter the text :</label>
        <input type="text" onChange={(e)=>setText(e?.target.value)} />
      </div>
      <div>
          <p> <strong>Show text :</strong> {text} </p>
      </div>
    </>
  );
}
