export default function Buttons( 
  { 
    clickme,
    addCount,
    subCount,
   
  }
){

  return <div>
      <button onClick={() => clickme("Saravanan is clicked this button")}> click me </button>
      <button onClick={() => addCount(1)}> Add </button>
      <button onClick={() => subCount(1)}> Sub </button>

  </div>
}