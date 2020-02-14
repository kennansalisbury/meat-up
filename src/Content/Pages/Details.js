import React from 'react'
import {useParams} from "react-router-dom"
import {Container, Row, Col, Jumbotron, Button} from 'reactstrap'

const Details = props => {
    let {id} = useParams()
    console.log(id)  
    let selectedEvent
    props.events.forEach(event => {
        if(event.id === id) {
            selectedEvent = event
        }
    })

    let content
    console.log('line 16')
    if (props.events > 0) {
        console.log('line 17', props.events)
        content = props.events.data.things.map((thing, i) => {
            return (
                <div>
                    <ul key={i}>
                        <li>{thing}</li>
                    </ul>
                </div>
            )
        })
    }
    else {
        content = <p>Nothing to bring...</p>
    }
    console.log('line 31', content)
            
    // console.log(selectedEvent)
    // if(selectedEvent){
    //     var content = (<h1>{selectedEvent.title}</h1>)
    // }
    return (
        <div>
            <div className="details">
                <h1>{selectedEvent.title}</h1>
                <h5>{selectedEvent.date}</h5>
                <h5>{selectedEvent.loc}</h5>
            </div>
            <div className="event-details">
                <h3>Event Details</h3>
                <p>{selectedEvent.desc}</p>
                <h3>What to Bring</h3>
                <ul>
                    <li>{content}</li>
                </ul>
                <Button>Attend This Event</Button>
            </div>
        </div>
    )
}

export default Details