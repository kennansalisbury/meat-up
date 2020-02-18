import React from 'react'
import FilterInput from '../../FilterInput'
import EventList from '../../EventList'
import {Container, Row, Col, Jumbotron} from 'reactstrap'
import {Link} from 'react-router-dom'
import Calendar from '../../static/img/calendar.png'
import Feature from '../../static/img/FeaturedEvent2.png'



class Browse extends React.Component{
    
    state = {
        EventsToDisplay: this.props.events,
        filterValue: ''
    }

    handleFilterChange = e => {
        e.preventDefault()
        const filterValue = e.target.value;
        this.setState((prevState, props) => {
            const filteredEvents = props.events.filter(event => 
                event.title.toLowerCase().includes(filterValue.toLowerCase()))
                return {
                    EventsToDisplay: filteredEvents,
                    filterValue,
                }
            })
        }

        render () {

            return (
            <div className="browse ml">
                <div className="browse-background"></div>
                    <Row >
                        <Col align="left">
                            <FilterInput value={this.state.filterValue} handleFilterChange={this.handleFilterChange} />
                        </Col>
                    </Row>
                    <br/>

                    <Row>
                        <Col sm="1"></Col>
                        <Col sm="5" align="left">
                            <Link to="/details/16"><img src={Feature}/></Link>
                        </Col>
                        <Col sm="1"></Col>
                        <Col sm="5">
                            <img className="calendar" src={Calendar} alt="calendar"/>
                        </Col>
                    </Row> 
                    <br/>
                    <br/>
                    <h3>Events</h3>
                            <br/>
                            <br/> 
                    <Row align="left">
                        
                        <EventList events={this.state.EventsToDisplay} />
                    </Row>
                    <hr/>
            </div>
            )
    }
}



export default Browse