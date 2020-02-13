import React from 'react'
import { Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
  } from 'reactstrap';

const Event = props => {
    
    if(props.event) {
        return (
            <Col>
                <Card>
                    <CardImg top width="100%" src="https://placeimg.com/200/175/any" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{props.event.title}</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                    <Button size="sm">View</Button>
                    </CardBody>
                </Card>
            </Col>
        )
    } else if(props.category) {
        return(
            <Col>
                 <Card inverse>
                    <CardImg width="100%" src="https://placeimg.com/300/200/any" alt="Card image cap" />
                    <CardImgOverlay>
                    <CardTitle><h2><strong>{props.category.title}</strong></h2></CardTitle>
                    {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText> */}
                    </CardImgOverlay>
                </Card>
            </Col>
        )
    }
}

export default Event