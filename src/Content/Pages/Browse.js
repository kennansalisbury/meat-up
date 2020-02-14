import React from 'react'
import FilterInput from '../../FilterInput'
import EventList from '../../EventList'
import {Container, Row, Col, Jumbotron} from 'reactstrap'
import calendar from '../../static/img/calendar2.png'


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
                        <Col sm="6">
                            <FilterInput value={this.state.filterValue} handleFilterChange={this.handleFilterChange} />
                            <div className="feature" sm="6"></div>
                            <EventList events={this.state.EventsToDisplay} />
                        </Col>
                        {/* <Col sm="2">

                        </Col> */}
                        <Col sm="6">
                            <img className="calendar" src={calendar} alt="calendar"/>
                        </Col>
                    </Row> 
            </div>
            )
    }
}



export default Browse