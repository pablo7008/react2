import React from "react"
import ItemDetailContainer from "./ItemDetailContainer"
import { useParams } from "react-router-dom"

const Detail = () => {
    const {id} = useParams()
    return (
        <div>
            <ItemDetailContainer id={id}/>
        </div>
    )
}
export default Detail