import React from 'react';

const EventList = props => {
    var eventList = props.events.map(event => <li>{event.title}</li>)
    return(
        <ul>
        {eventList}
        </ul>
    )
   
    }

export default EventList;