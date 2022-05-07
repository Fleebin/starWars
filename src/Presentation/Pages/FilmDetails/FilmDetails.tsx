import React from "react"
import { useParams } from "react-router-dom"
import { useDetails } from "../../Hooks/useDetails"
import {Films} from '../../../Shared/Interfaces'



export const FilmDetails = () => {
    const {id} = useParams();
    const {data} = useDetails<Films>(`films/${id}`)

    if (!data) {
        return <p>Carregando...</p>
    }

    return (
        <>
        <ul>
            <li>Name: {data.title}</li>
        </ul>
        </>
    )
}