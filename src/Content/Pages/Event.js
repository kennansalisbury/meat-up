import React from 'react'
import { Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
  } from 'reactstrap';
import {Link} from 'react-router-dom'
import image from '../../static/img/Event-tst.png'

const Event = props => {
    if(props.event) {
        return (
            <Col>
                <Link className="card-link" to="/browse"> 
                <Card className="event-card" inverse>
                    <CardImg top width="100%" src={props.event.image} alt="Card image cap" />
                    <CardImgOverlay>
                        <CardTitle className="text-btm">{props.event.title}</CardTitle>
                        {/* <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                        {/* <Link to={`/browse`} className="link"><Button className="link" size="sm">View</Button></Link> */}
                    </CardImgOverlay>
                </Card>
                </Link>
            </Col>
        )
    } else if(props.category) {
        return(
            <Col>
                <Link to="/browse">
                    <Card className="round-border" inverse>
                        <CardImg className="round-border" width="100%" src="https://placeimg.com/300/200/any" alt="Card image cap" />
                        <CardImgOverlay className="round-border">
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