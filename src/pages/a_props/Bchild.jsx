export default function Bchild(
    {name,email,phone,address}
){
    const {temp,permanent} = address

    return(
        <>
          
          <p> Canidate Name  : {name} </p>
          <p> Canidate Email  : {email} </p>
          <p> Canidate Phone   : {phone} </p>
          <p> Canidate temp Address : {temp.streetName} - {temp.area} </p>
          <p> Canidate permanent Address : {permanent.streetName} - {permanent.area} </p>

        
        
        </>
    )
}