import { useState } from "react";

export default function NameListPreparation() {

  const [name, setName] = useState(null);
  const [namelist, setNameList] = useState([]);


  return (
    <>
      <div>
       
        <div>
           <h3>Student List </h3>
            {namelist.length != 0 ? (
                namelist.map((value, index) => <p key={index}>{value}</p>)
            ) : (
                <p> No Record Found </p>
            )}
        </div>

        <div>
          <input
            type="text"
            onChange={(event) => setName( event?.target?.value )}
          />
          <button onClick={ () => setNameList([...namelist,name]) } > Add </button>
        </div>
      </div>
    </>
  );
}
