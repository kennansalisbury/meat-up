import React from 'react'
import {Button, Row, Col, Container} from 'reactstrap'
import raven from '../../static/img/Event3.png'
import {Link} from 'react-router-dom'

const Confirmation = props => {
    return (
        <Container className="mt">
            <Row>
                <h1>Registration complete</h1>
            </Row>
            <Row>
                <Col sm="6">
                    <p>Thank you for registering: </p>
                    <Row>
                        <Col sm="2">
                            <img src="https://img.icons8.com/color/48/000000/jamon.png" alt="turkey-leg"/>
                        </Col>
                        <Col sm="2">
                            <h2>{props.user.name}</h2>
                        </Col>
                    </Row>
                    <p>Your confirmation and ticket to enter the event will arrive to your clan via Raven within the next few days. Bring the Raven and your ticket to the event as proof of registration.</p>
                </Col>
                <Col sm="1"></Col>
                <Col>
                    <img src={raven} alt="confirmation"/>
                </Col>
            </Row>
            <Row>
                <Button className="sbs-btn">Directions</Button>
                <Button className="sbs-btn"><Link className="link" to="/browse">Browse More Events</Link></Button>
            </Row>
        </Container>   
    )
}

export default Confirmation