import React from 'react';import { Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

const EventList = props => {
    
        

    var eventList = props.events.map(event => <ul>{event.title}</ul>)
    let content;
    if (eventList.length > 0) (
        content = eventList.map((e, i) => {
            return (
            <div >
                <Col>
                <Card key={i}>
                    <CardImg top width="100%" src="https://placeimg.com/200/200/any" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{e}</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                    <Button><Link to='details/{Events.data.id}'>View More Info</Link></Button>
                    </CardBody>
                </Card>
                </Col>
            </div>
            )
        })
    )
    else {
        content = <p>No Events Yet...</p>
    }


    return(
        <div className='events'>
            <ul>
            {content} 
            </ul>
        </div>
    )

}

export default EventList;