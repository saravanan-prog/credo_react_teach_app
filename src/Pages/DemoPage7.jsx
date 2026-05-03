export default function DemoPage7(){

    const handleClick = () => {
       console.log("button1 is clicked")
       console.log("clicked by saravanan")
       console.log("He is a React Js developer")
    }

    return <div>
        <button onClick = {handleClick} > Button 1 </button>
        <button onClick = { () => console.log("button 2 is clicked") }> Button 2 </button>
    </div>
}