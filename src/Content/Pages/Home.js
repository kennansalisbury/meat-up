import React from 'react'
import Event from './Event'

const Home = props => {
    
    //for each event, return event component with event data passed as prop
    let displayEvents = props.events.map(event => {
        return <Event event={event}/>
    })
    
    return (
        <div>
            {displayEvents}
        </div>
    )
}

export default Home