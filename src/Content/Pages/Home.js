import React from 'react'
import Event from './Event'
import {Container, Row, Col, Jumbotron, Button} from 'reactstrap'

const Home = props => {
    
    //for each event, return event component with event data passed as prop
    let displayEvents = props.events.map(event => {
        return <Event event={event}/>
    })
    
    return (
        <Container>
            <div className="home-jumbotron">
                <Jumbotron sm="12">
                    <Col align="center">
                        <h1>The Meat Summons Ye</h1>
                        <Button>Browse Events</Button>
                    </Col>
                </Jumbotron>
            </div>
            <Row>
            {displayEvents}
            </Row>
        </Container>
    )
}

export default Home