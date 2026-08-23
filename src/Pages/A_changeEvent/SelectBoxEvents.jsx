import React, { useState } from "react";
import stateslist from "../../assets/json/stateList.json";
import citieslist from "../../assets/json/cityList.json";

export default function SelectBoxEvents() {
    
    const [stateList, setStateList] = useState(stateslist);
    const [citiesList, setCitiesList] = useState(citieslist);

    const [selectedState, setSelectedState] = useState("TN");

    return (
        <>
            <div>
                <h1> State List </h1>
                <select onChange={(event) => setSelectedState(event.target.value)}>

                    {stateList.map((value, index) => {
                        return (
                            <React.Fragment key = {index} >
                                <option value={value?.stateCode}> {value?.stateName} </option>
                            </React.Fragment>
                           
                        );
                    })}
                </select>

                <p> Your are sleceted State is : {selectedState} </p>
            </div>

            <div>
                <h1> Cities List </h1>
                <select>
                    {citiesList.map((value, index) => {
                        return (
                            selectedState == value.stateCode && (
                                <option> {value.city} </option>
                            )
                        );
                    })}
                </select>
            </div>

        </>
    );
}
