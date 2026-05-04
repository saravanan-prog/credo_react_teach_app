export default function Buttons( 
  { 
    count,
    clickme,
    addCount,
    subCount,
    squareRoot,
    reset
   
  }
){

  return <div>
      

      <button onClick={() => addCount(1)}> Add </button>

      <button onClick={() => subCount(1)}
         disabled = {count == 0}
       > Sub </button>


      <button onClick={() => squareRoot(2)}> Squre Root </button>
      <button onClick = {()=> reset(0)}>Reset</button>

  </div>
}