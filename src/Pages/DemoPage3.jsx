export default function DemoPage3() {

  const userAvaiable = false;


  return (

    <div>
        {userAvaiable && ( <p>User is Available right now </p> ) }

        <p> User Status :  {userAvaiable ? "Online" : "Offline"} </p>
    </div>

  );
}