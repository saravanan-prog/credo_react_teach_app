export default function Bchild( 
    {
       canidateName,
       candidateEmail,
       candidatePhone,
       candidateAddress
    }
 ){

    const {
        permanent,
        temp
    } = candidateAddress
    
    return(
        <>
          
          <p> Canidate Name  : {canidateName} </p>
          <p> Canidate Email  : {candidateEmail} </p>
          <p> Canidate Phone   : {candidatePhone} </p>
          <p> Canidate temp Address : {permanent.area}  </p>
          <p> Canidate permanent Address : {temp.area} </p>

        
        
        </>
    )
}