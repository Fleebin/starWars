import React from "react"
import { useParams } from "react-router-dom"
import { useDetails } from "../../Hooks/useDetails"

interface People {
    id: number;
    name: string;
}

export const PeopleDetails = () => {
    const {id} = useParams();
    const {data} = useDetails<People>(`people/${id}`)

    if (!data) {
        return <p>Carregando...</p>
    }
    return (
        <>
        <ul>
            <li>Name: {data.name}</li>
        </ul>
        </>
    )
}