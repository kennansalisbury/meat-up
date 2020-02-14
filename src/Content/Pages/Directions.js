import React, {useState} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'

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
                    <Button color="warning" onClick={() => setButtons(setWalk)}>By Foot</Button>
                    <Button onClick={() => setButtons(setBike) }>Horse</Button>
                    <Button onClick={() => setButtons(setCar) }>Ship</Button>
                    <Button onClick={() => setButtons(setBus)}>Caravan</Button>
                    <br/>
                    <br/>
                    <h2>Arrive by: 239 days from today</h2>

                    <img width="100%" src="https://www.amdigital.co.uk/images/blog/content/blog-images/medieval-maps/4.PNG" alt="medieval-map"/>
                    <br/>
                    <h2>Yer Walking Directions:</h2>
                    <h2>1. Walk</h2>
                    <h2>2. Walk</h2>
                    <h2>3. Etc.</h2>
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
                    <h2>Yer Walking Directions:</h2>
                    <h2>1. Walk</h2>
                    <h2>2. Walk</h2>
                    <h2>3. Etc.</h2>
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
                    <h2>Yer Walking Directions:</h2>
                    <h2>1. Walk</h2>
                    <h2>2. Walk</h2>
                    <h2>3. Etc.</h2>
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
                    <h2>Arrive by: 20 days from today</h2>

                    <img width="100%" src="https://www.amdigital.co.uk/images/blog/content/blog-images/medieval-maps/4.PNG" alt="medieval-map"/>
                    <br/>
                    <h2>Yer Walking Directions:</h2>
                    <h2>1. Walk</h2>
                    <h2>2. Walk</h2>
                    <h2>3. Etc.</h2>
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
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
}
}

export default Directions