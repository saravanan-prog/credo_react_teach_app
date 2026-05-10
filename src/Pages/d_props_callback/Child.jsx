export default function Child( 
  {    
      clickme,
      clickedBy,
      addCount,
  }
){

  return <div>
      <button onClick = {clickme}> click me </button>
      <button onClick = {()=>clickedBy("saravanan")}> click By </button>
      <button onClick = {()=>addCount(1)}> add count </button>
  </div>
}