import React from 'react'
import {Button, Row, Col, Container, Card, CardImg, CardTitle, CardBody} from 'reactstrap'
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
            <Row className="mt">
                <Row>
                <h2>Recommended for ye:</h2>
                </Row>

                <Row>
                <Col sm="3">
                <Card>
                    <CardImg top width="100%" src="https://previews.123rf.com/images/movingmoment/movingmoment1612/movingmoment161200027/70927074-single-grilled-hamburger-patty-isolated-on-white-.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle><a className="link-black" href="#">Meat Singles Near You</a></CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                    {/* <Button className="link" size="sm">View</Button> */}
                    </CardBody>
                </Card>
                </Col>
                <Col sm="3">
                <Card>
                    <CardImg className="card-img" top src="http://www.castlesandmanorhouses.com/pics/suckling.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle><a className="link-black" href="#">5 Tips for Meat Prep</a></CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                    {/* <Button className="link" size="sm">View</Button> */}
                    </CardBody>
                </Card>
                </Col>
                </Row>
                
            </Row>
        </Container>   
    )
}

export default Confirmation