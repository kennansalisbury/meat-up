import React from 'react'
import Event from './Event'
import {Container, Row, Col, Jumbotron, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const Home = props => {
    
    //for each event, return event component with event data passed as prop
    let displayPopularEvents = props.events.map(event => {
        return <Event event={event}/>
    })

    let displayNearEvents = props.nearEvents.map(event => {
        return <Event event={event}/>
    })

    let displayCategories = props.categories.map(category => {
        return <Event category={category} />
    })
    
    return (
        <div className="home-page">
        <Container>
            <div className="home-jumbotron">
                <Jumbotron className="jumbotron" sm="12">
                    <Col align="center">
                        <br/>
                        <h1>The Meat Summons Ye</h1>
                        <br/>
                        <br/>
                        <Button className="jumbotron-btn"><Link className="link" to="/browse">Browse Events</Link></Button>
                    </Col>
                </Jumbotron>
            </div>
            <Row>
                <Col sm="6">
                    <h2>Popular Events</h2>
                </Col>
                <Col sm="5"></Col>
                <Col sm="1">
                    <Link className="link-black" to="#">See all</Link>
                </Col>
            </Row>
            <div className="mb-5">
                <Row>
                    {displayPopularEvents}
                </Row>
            </div>
                <Row>
                    <Col sm="6">
                        <h2>Near You</h2>
                    </Col>
                    <Col sm="5"></Col>
                    <Col sm="1">
                        <p>See all</p>
                    </Col>
                </Row>
            <div className="mb-5">
                <Row>
                    {displayNearEvents}
                </Row>
            </div>
                <Row>
                    <Col sm="6">
                        <h2>Categories</h2>
                    </Col>
                    <Col sm="5"></Col>
                    <Col sm="1">
                        <p>See all</p>
                    </Col>
                </Row>
            <div className="mb-5">
                <Row>
                    {displayCategories}
                </Row>
            </div>
        </Container>
        </div>
    )
}

export default Home