import React from 'react'
import { Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const Event = props => {
    return (
        <Col>
            <Card>
                <CardImg top width="100%" src="https://placeimg.com/200/200/any" alt="Card image cap" />
                <CardBody>
                <CardTitle>{props.event.title}</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                <Button>View More Info</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Event