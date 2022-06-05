import React,{useContext} from 'react'
import StaticContext from "context/StaticContext"

function DetailsGif({ params}) {
    const context = useContext(StaticContext)
    console.log(context)
    return ( <></> );
}

export default DetailsGif;