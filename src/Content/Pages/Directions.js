import React, {useState} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const Directions = props => {

    let [walk, setWalk] = useState(false)
    let [bike, setBike] = useState(false) 
    let [car, setCar] = useState(false)
    let [bus, setBus] = useState(false)


    const setButtons = (setValue) => {
        if(setValue === setWalk) {
            setWalk(true) 
            setBike(false) 
            setCar(false)
            setBus(false)
        } else if(setValue === setBike) {
            setWalk(false) 
            setBike(true) 
            setCar(false)
            setBus(false) 
        } else if(setValue === setCar) {
            setWalk(false) 
            setBike(false) 
            setCar(true)
            setBus(false)
        } else if(setValue === setBus) {
            setWalk(false) 
            setBike(false) 
            setCar(false)
            setBus(true)
        }
    }

    if(walk){
        return (
            <Container className="mt">
                <h1>Directions</h1>
                <h2>(Brought to you by MeatQuest)</h2>
                <hr></hr>
                <Row>
                    <Col></Col>
                    <Col sm="6">
                    <Button className="sbs-btn" color="warning" onClick={() => setButtons(setWalk)}>By Foot</Button>
                    <Button className="sbs-btn" onClick={() => setButtons(setBike) }>Horse</Button>
                    <Button className="sbs-btn" onClick={() => setButtons(setCar) }>Ship</Button>
                    <Button className="sbs-btn" onClick={() => setButtons(setBus)}>Caravan</Button>
                    <br/>
                    <br/>
                    <h2>Arrive by: 239 days from today</h2>

                    <img width="100%" src="https://www.amdigital.co.uk/images/blog/content/blog-images/medieval-maps/4.PNG" alt="medieval-map"/>
                    <br/>
                    <br/>
                    <h2>Yer Walking Directions:</h2>
                    <h2>1. Walk</h2>
                    <h2>2. For 239 days</h2>
                    <h2>3. Don't forget your money for the Troll Bridge </h2>
                    <Link className="link" to="/browse"><Button className="sbs-btn">Browse More Events</Button></Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )

    } else if(bike) {
        return (
            <Container className="mt">
                <h1>Directions</h1>
                <h2>(Brought to you by MeatQuest)</h2>
                <hr></hr>
                <Row>
                    <Col></Col>
                    <Col sm="6">
                    <Button className="sbs-btn" onClick={() => setButtons(setWalk) }>By Foot</Button>
                    <Button className="sbs-btn" color="warning" onClick={() => setButtons(setBike) }>Horse</Button>
                    <Button className="sbs-btn" onClick={() => setButtons(setCar) }>Ship</Button>
                    <Button className="sbs-btn" onClick={() => setButtons(setBus) }>Caravan</Button>
                    <br/>
                    <br/>
                    <h2>Arrive by: 175 days from today</h2>

                    <img width="100%" src="https://www.amdigital.co.uk/images/blog/content/blog-images/medieval-maps/4.PNG" alt="medieval-map"/>
                    <br/>
                    <br/>
                    <h2>Directions by Horseback:</h2>
                    <h2>1. Follow the trail through the dark woods.</h2>
                    <h2>2. Take a left at the tree of the old gods.</h2>
                    <h2>3. Try not to eat your horse before you get to the event.</h2>
                    <Link className="link" to="/browse"><Button className="sbs-btn">Browse More Events</Button></Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )


    }else if(car) {
        return (
            <Container className="mt">
                <h1>Directions</h1>
                <h2>(Brought to you by MeatQuest)</h2>
                <hr></hr>
                <Row>
                    <Col></Col>
                    <Col sm="6">
                    <Button className="sbs-btn" onClick={() => setButtons(setWalk) }>By Foot</Button>
                    <Button className="sbs-btn" onClick={() => setButtons(setBike) }>Horse</Button>
                    <Button color="warning" className="sbs-btn" onClick={() => setButtons(setCar) }>Ship</Button>
                    <Button className="sbs-btn" onClick={() => setButtons(setBus) }>Caravan</Button>
                    <br/>
                    <br/>
                    <h2>Arrive by: 99 days from today</h2>

                    <img width="100%" src="https://www.amdigital.co.uk/images/blog/content/blog-images/medieval-maps/4.PNG" alt="medieval-map"/>
                    <br/>
                    <br/>
                    <h2>Yer Boating Directions:</h2>
                    <h2>1. Take the stormy seas</h2>
                    <h2>2. Plunder ships passing by</h2>
                    <h2>3. Grab some Kracken meat on the way if ye dare!</h2>
                    <Link className="link" to="/browse"><Button className="sbs-btn">Browse More Events</Button></Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )

    }else if(bus) {
        return (
            <Container className="mt">
                <h1>Directions</h1>
                <h2>(Brought to you by MeatQuest)</h2>
                <hr></hr>
                <Row>
                    <Col></Col>
                    <Col sm="6">
                    <Button className="sbs-btn" onClick={() => setButtons(setWalk) }>By Foot</Button>
                    <Button className="sbs-btn" onClick={() => setButtons(setBike) }>Horse</Button>
                    <Button className="sbs-btn" onClick={() => setButtons(setCar) }>Ship</Button>
                    <Button color="warning" className="sbs-btn" onClick={() => setButtons(setBus) }>Caravan</Button>
                    <br/>
                    <br/>
                    <h2>Arrive by: 400 days from today</h2>

                    <img width="100%" src="https://www.amdigital.co.uk/images/blog/content/blog-images/medieval-maps/4.PNG" alt="medieval-map"/>
                    <br/>
                    <br/>
                    <h2>Yer Caravan Directions:</h2>
                    <h2>1. Gather yer clan</h2>
                    <h2>2. Wave yer flags</h2>
                    <h2>3. Don't let the sick ones delay yer travel!</h2>
                    <Link className="link" to="/browse"><Button className="sbs-btn">Browse More Events</Button></Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    } else {

        return (
            <Container className="mt">
                <h1>Directions</h1>
                <h2>(Brought to you by MeatQuest)</h2>
                <hr></hr>
                <Row>
                    <Col></Col>
                    <Col sm="6">
                    <Button className="sbs-btn" onClick={() => setButtons(setWalk) }>By Foot</Button>
                    <Button className="sbs-btn" onClick={() => setButtons(setBike) }>Horse</Button>
                    <Button className="sbs-btn" onClick={() => setButtons(setCar) }>Ship</Button>
                    <Button className="sbs-btn" onClick={() => setButtons(setBus) }>Caravan</Button>
                    <br/>
                    <br/>
                        <img width="100%" src="https://www.amdigital.co.uk/images/blog/content/blog-images/medieval-maps/4.PNG" alt="medieval-map"/>
                        <Link className="link" to="/browse"><Button className="sbs-btn">Browse More Events</Button></Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
}
}

export default Directions