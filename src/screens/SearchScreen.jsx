import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function SearchScreen(){
    const [inputNum, setInputNum] = useState(null)
    const navigate = useNavigate()

    function changeNum(event) {
        setInputNum(event.target.value)
    }

    function handleSearch() {
        let num = +inputNum
        if(num) {
            navigate(`/details/${num}`)
        } else {
            alert("That's not a number.")
        }
    }

    return (
        <div>
            <h1>Search</h1>
            <input 
                type="text" 
                placeholder="Type a number!" 
                onChange={changeNum}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchScreen