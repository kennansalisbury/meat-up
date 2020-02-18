import React from 'react';import { Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row
} from 'reactstrap';
import { Link } from 'react-router-dom'

const EventList = props => {
    
    // var eventList = props.events.map(event => <ul>{event.title}</ul>)
    let content;
    if (props.events.length > 0) (
        content = props.events.map((e, i) => {
            return (
                <div>
                    <Card key={i} className="wider" align="left">
                        {/* <CardImg top width="100%" src="https://placeimg.com/200/200/any" alt="Card image cap" /> */}
                        <CardBody>
                        <Row>
                        <Col sm="3">     
                            <CardImg src={e.image} alt="Card image cap" />
                        </Col>
                        <Col> 
                            <CardTitle><h2>{e.title}</h2></CardTitle>
                            <CardText>{e.date}</CardText>
                            <CardText>{e.desc}</CardText>
                        
                            {/* <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                            <Link className='link' to={`details/${e.id}`}><Button>View More Info</Button></Link>
                            </Col>
                        </Row>
                        </CardBody>
                    </Card>
                    <br/>
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