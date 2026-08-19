import { useState } from "react"

export default function BchildComponent(
    {
        handleUpdate,
        handleDelete
    }
) {


    return (
        <>
            <h3> Child Component </h3>
            <button onClick={handleUpdate} >  Update </button>
            <button onClick={handleDelete} >  Delete  </button>

        </>
    )
}