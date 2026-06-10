import { memo } from 'react'


export default memo( function Childcomponent( {name} ){

    console.log("child componet is rendering....")

    return <div>
        <h1>Child component</h1>
        <p> Profile Name : {name} </p>
    </div>
})