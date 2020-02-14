import React from 'react'
import { Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
  } from 'reactstrap';
import {Link} from 'react-router-dom'

const Event = props => {
    if(props.event) {
        return (
            <Col>
                <Link className="card-link" to="/browse"> 
                <Card>
                    <CardImg top width="100%" src="https://placeimg.com/200/175/any" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{props.event.title}</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                    <Link to={`/browse`} className="link"><Button className="link" size="sm">View</Button></Link>
                    </CardBody>
                </Card>
                </Link>
            </Col>
        )
    } else if(props.category) {
        return(
            <Col>
                <Link to="/browse">
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
                </Link>
            </Col>
        )
    }
}

export default Event