import { useState } from "react"
import states from '../assets/json/stateList.json'
import cities from '../assets/json/cityList.json'


export default function Dropdown() {

    const [stateList, setStateList] = useState(states)
    const [citiesList, setCitiesList] = useState(cities)

    const [selectedState, setSelectedState] = useState('TN')


    return <div>
        <div>

            <select onChange={(event) => setSelectedState(event.target.value)}>
                {stateList.map((value, index) => {
                    return  <option value={value?.stateCode} > {value?.stateName} </option>
                })}
            </select>

            <p> Your are sleceted State is : {selectedState} </p>


            <select>
                {citiesList.map((value, index) => {
                    return (selectedState == value.stateCode) && <option> {value.city} </option>
                })
                }
            </select>

        </div>

    </div>
}