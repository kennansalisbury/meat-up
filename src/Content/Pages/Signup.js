import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const Signup = props => {
    return (
        <Container className="mt">
            <h2>Attendee Details</h2>
            <p>Please fill out the following information:</p>
            <Form>
                <Row>
                    <Col sm="6">
                        <FormGroup>
                            {/* name, clan (drop down), party size (number), confirm registration button */}
                            <Label for="name">What's yer name?</Label>
                            <Input type="text" id="name" placeholder="name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="clan">Whose yer clan?</Label>
                            <Input type="select" name="clan" id="clan" placeholder="clan">
                                <option>Oddaverjar</option>
                                <option>Sturlungar</option>
                                <option>Haukdælir</option>
                                <option>Rus’ Khaganate</option>
                                <option>Völsung</option>
                                <option>Skjöldung</option>
                                <option>Scylfing</option>
                                <option>Ylfing</option>
                                <option>Wægmunding</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="party-size">How many of ye?</Label>
                            <Input type="select" name="party-size" id="party-size">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col></Col>
                    
                    <Col sm="5">
                        <FormGroup tag="fieldset" align="center">
                            <Row>
                                <Label>Choose yer carnivoratar</Label>
                            </Row>
                            <Row>
                                <Col>
                                <FormGroup check>
                                    
                                    <Label check >
                                        <Input type="radio" name="avatar"/>{' '}
                                        <img src="https://img.icons8.com/color/96/000000/kebab.png" alt="kebab"/>
                                    </Label>
                                </FormGroup>
                                </Col>
                                <Col>
                                <FormGroup check>
                                    <Label check >
                                        <Input type="radio" name="avatar"/>{' '}
                                        <img src="https://img.icons8.com/color/96/000000/bacon.png" alt="bacon"/>
                                    </Label>
                                </FormGroup>
                                </Col>
                                <Col>
                                <FormGroup check >
                                    <Label check >
                                        <Input type="radio" name="avatar"/>{' '}
                                        <img src="https://img.icons8.com/color/96/000000/jamon.png" alt="turkey-leg"/>
                                    </Label>
                                </FormGroup>
                                </Col>
                                <Col>
                                <FormGroup check >
                                    <Label check >
                                        <Input type="radio" name="avatar"/>{' '}
                                        <img src="https://img.icons8.com/color/96/000000/rack-of-lamb.png" alt="lamb"/>
                                    </Label>
                                </FormGroup>
                                </Col>
                                </Row>
                            </FormGroup>
                       
                    </Col>
                </Row>
                <Row>
                    <Button><Link className="link" to="/confirmation">Submit</Link></Button>
                </Row>
            </Form>

        </Container>
    )
}

export default Signup