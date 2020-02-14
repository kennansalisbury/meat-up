import React from 'react'
import FilterInput from '../../FilterInput'
import EventList from '../../EventList'
import {Container, Row, Col, Jumbotron} from 'reactstrap'
import Calendar from '../../static/img/calendar.png'


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
            <div className="browse">
                <div className="browse-background"></div>
                    <Row>
                        <Col sm="1"></Col>
                        <Col align="left">
                            <FilterInput value={this.state.filterValue} handleFilterChange={this.handleFilterChange} />
                            <div className="feature" sm="6"></div>
                            <br/>
                            <br/>
                            <div className="ml"><h3>Events</h3></div>
                            
                            <EventList events={this.state.EventsToDisplay} />
                        </Col>
                        {/* <Col sm="2">

                        </Col> */}
                        <Col sm="6">
                            <img className="calendar" src={Calendar} alt="calendar"/>
                        </Col>
                    </Row> 
                    <hr/>
            </div>
           
            )
    }
}



export default Browse