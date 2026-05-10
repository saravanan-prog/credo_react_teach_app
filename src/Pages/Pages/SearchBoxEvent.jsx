import { useState } from "react"

export default  function SearchBoxEvent(){

    const [fruit,setFruitList] =useState(["apple","orange","grapes"])
    const [searchText,setSearchText] = useState()


    const searchTextHandling = (event) => {
        let text = event.target.value

        if(text.length != 0 )

            setSearchText(text)
        else
            setSearchText(["apple","orange","grapes"])

    }

    const handleSearch = () => {

        const filterFruits = fruit.filter( value => value == searchText )
        console.log("searchText===>",searchText)
        console.log("filterFruits===>",filterFruits)
        setFruitList(filterFruits)
    }

    return <div>
        <div>
            <input type="text"  onChange={searchTextHandling }/>
            <button onClick={handleSearch}>Search</button>
        </div>
        

        <div>
            <h3> Fruit List </h3>
            {fruit.map((value,index) => <p key={index}> {value} </p>)}
        </div>
    </div>
}