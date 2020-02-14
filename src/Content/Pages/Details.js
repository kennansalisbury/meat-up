import React from 'react'
import {useParams} from "react-router-dom"
const Details = props => {
    let {id} = useParams()
    console.log(id)  
    let selectedEvent
    props.events.forEach(event => {
        if(event.id === id) {
            selectedEvent = event
        }
    })
    // console.log(selectedEvent)
    // if(selectedEvent){
    //     var content = (<h1>{selectedEvent.title}</h1>)
    // }
    return (
        <div>
            {selectedEvent.title}
        </div>
    )
}

export default Details