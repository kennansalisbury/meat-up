import React from 'react'
import {Container, Row, Col} from 'reactstrap'

const Directions = props => {
    return (
        <Container className="mt">
            <h1>Directions</h1>
            <h2>(Brought to you by MeatQuest)</h2>
            <Row>
                <Col></Col>
                <Col sm="6">
                    <img width="100%" src="https://www.amdigital.co.uk/images/blog/content/blog-images/medieval-maps/4.PNG" alt="medieval-map"/>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Directions