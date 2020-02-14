import React from 'react'
import {Button, Row, Col, Container} from 'reactstrap'
import raven from '../../static/img/Event3.png'
import {Link} from 'react-router-dom'

const Confirmation = props => {
    return (
        <Container>
                
            <Row>
                <Col>
                    <h1>Registration complete</h1>
                    <p>Thank you for registering {props.user.name}</p>
                    <p>Your confirmation and ticket to enter the event will arrive to your clan via Raven within the next few days. Bring the Raven and your ticket to the event as proof of registration.</p>
                </Col>
                <Col>
                    <img src={raven} alt="confirmation"/>
                </Col>
            </Row>
            <Row>
                <Button className="sbs-btn">Directions</Button>
                <Button className="sbs-btn"><Link className="link" to="/">Browse More Events</Link></Button>
            </Row>
        </Container>   
    )
}

export default Confirmation