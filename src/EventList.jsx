import React from 'react';

const EventList = props => (
    <ul>
        {props.events.map(event => <li>{event}</li>)}
    </ul>
)

export default EventList;