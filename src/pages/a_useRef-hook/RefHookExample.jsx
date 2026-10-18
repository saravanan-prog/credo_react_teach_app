import { useEffect, useRef } from "react";

export default function RefHookExample() {
  
  console.log("Component Rendering.....")

  const countRef = useRef();

  useEffect(() => {
    console.log("countRef", countRef);
  }, []);

  const changeText = () => {
    var count = countRef.current.innerText;
    var result = Number(count) + 1;
    countRef.current.innerText = result;
  };

  return (
    <>
      <div>
        <h3> Use Ref Hook Example </h3>
      </div>

      <div>
        <span>Count : </span>
        <span ref={countRef}> 1 </span>
        <button onClick={changeText}> ADD count </button>
      </div>
    </>
  );
}


