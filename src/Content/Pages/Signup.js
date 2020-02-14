import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

const Signup = props => {
    return (
        <Container>
            <h2>Attendee Details</h2>
            <p>Please fill out the following information:</p>
            <Form>
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
                    <Button><Link to="Confirmation">Submit</Link></Button>
                </FormGroup>
            </Form>

        </Container>
    )
}

export default Signup