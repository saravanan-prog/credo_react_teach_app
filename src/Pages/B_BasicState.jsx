import { useState } from "react";

export default function B_BasicState() {

  const [candidateName, setCandidateName] = useState("Mohemed");
  const [candidateEmail, setCandidateEmail] = useState("mohamed@gmail.com");
  const [moreContact,setMoreContact] = useState(
    {
      "instagram" : "faiz.faizhul",
      "facebook"  :  "don_faizhulmohamed",
      "twitter"   :  "Mr__Faizhul",
      "watsapp"   : " +91 8888888888"
    }
  )
  

  const bulkUpdate = () => {
      setCandidateName("Faizhul Mohamed")
      setCandidateEmail("faizhul.mohamed786@gmail.com")
      // update the watsapp number
      setMoreContact( 
         {
          ...moreContact,
          "watsapp"   : " +91 7780650421"
         }
      )
  }   

  return (
    <>
      <div>
        <h3> Basic Detail </h3>
        <p> Canidate Name  - {candidateName} </p>
        <p> Candiate Email - {candidateEmail}</p>
      </div>
      <div>
          <h3>More Details</h3>
          <p>Instagram : {moreContact?.instagram} </p>
          <p>FaceBook : {moreContact?.facebook} </p>
          <p>Watsapp : {moreContact?.watsapp} </p>
      </div>

      <div>
          <button onClick = {bulkUpdate}> Bulk Update </button>
      </div>
    </>


  );
}
