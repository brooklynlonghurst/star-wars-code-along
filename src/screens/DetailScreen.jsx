import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";


function DetailScreen(){
    const [person, setPerson] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((res) => {
            console.log(res.data)
            setPerson(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1>{person.name}</h1>
            <h2>Height: {person.height}cm</h2>
            <h2>Weight: {person.mass}kg</h2>
            <h2>Hair: {person.hair_color}</h2>
        </div>
    )
}

export default DetailScreen