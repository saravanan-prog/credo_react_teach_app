export default function Events(){

    const handleClick = () => {
        console.log("button is clicked")
    }

    const handleChange =(event) => {
        console.log("Typed Text ====>",event?.target?.value)
    }

    return <div>
         <h1> Before Short cut</h1>
        <div>
           <input type="text" onChange = {handleChange} />
           <button onClick = {handleClick} > click me </button>
        </div>

        <h1> After Short cut</h1>

        <div>
            <input type="text" onChange = { (event) => console.log(event.target.value) } />
            <button onClick ={ ()=> console.log("Button action is triggered") }>click me </button>
        </div>
        
        

    </div>
}