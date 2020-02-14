import React, {useState} from 'react'
import {useParams} from "react-router-dom"
import {Container, Row, Col, Jumbotron, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import Signup from './Signup'



const Details = props => {
    
    let [signup, setSignup] = useState(false)
    
    let {id} = useParams()
    console.log(id)  
    let selectedEvent
    props.events.forEach(event => {
        if(event.id === id) {
            selectedEvent = event
        }
    })


    const handleClick = () => {
        setSignup(true)
    }

    // let content
    // console.log('line 16')
    // if (props.events > 0) {
    //     console.log('line 17', props.events)
    //     content = props.events.data.things.map((thing, i) => {
    //         return (
    //             <div>
    //                 <ul key={i}>
    //                     <li>{thing}</li>
    //                 </ul>
    //             </div>
    //         )
    //     })
    // }
    // else {
    //     content = <p>Nothing to bring...</p>
    // }
    // console.log('line 31', content)
            
    // console.log(selectedEvent)
    // if(selectedEvent){
    //     var content = (<h1>{selectedEvent.title}</h1>)
    // }

    if(signup) {
        return ( 
          <Container>
            <div className="details">
                <h1>{selectedEvent.title}</h1>
                <h5>{selectedEvent.date}</h5>
                <h5>{selectedEvent.loc}</h5>
            </div>
            <hr></hr>
            <br/>
            <br/>
        
        <Signup/>
        </Container>

        )
    }


    return (
            <Container>
                <div>
                    <div className="details">
                        <h1>{selectedEvent.title}</h1>
                        <h5>{selectedEvent.date}</h5>
                        <h5>{selectedEvent.loc}</h5>
                    </div>
                    <hr></hr>
                    <br/>
                    <br/>
                <Row>
                <Col sm="1"></Col>
                <Col >
                    <br/>
                    <br/>
                    <img src={selectedEvent.image}/>
                </Col>
                <Col>
                    <div className="event-details">
                        <h3>Event Details</h3>
                        <p>{selectedEvent.desc}</p>
                        <h3>What to Bring</h3>
                        <ul>
                            <li>Your Confimation Raven</li>
                            <li>Scroll and quill for notes</li>
                            <li>A canvas bag (all meat purchased will not be pre-packaged)</li>
                            <li>Money to buy and barter exotic meat</li>
                        </ul>
                        {/* <Link to="/signup"><Button>Attend This Event</Button></Link> */}
                        <Button onClick={() => handleClick()}>Attend This Event</Button>
                    </div>
                
                </Col>
                </Row>
                </div>
                </Container>
    )
}

export default Details