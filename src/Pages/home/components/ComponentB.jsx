import { useContext } from "react";
import { HomeContext } from "../../../core/context/contextStore";
import ComponentC from "./ComponentC";


export default function ComponentB(){

    const item = useContext(HomeContext)

    return <div>
         <h5> ComponentB </h5>
         <p> Student Age : {item?.studentAge}</p>
         <ComponentC />
    </div>

}