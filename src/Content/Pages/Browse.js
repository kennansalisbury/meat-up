import React from 'react'
import FilterInput from '../../FilterInput'
import EventList from '../../EventList'
import {Container, Row, Col, Jumbotron} from 'reactstrap'
import calendar from '../../static/img/calendar2.png'


class Browse extends React.Component{
    
    state = {
        EventsToDisplay: this.props.events,
        // EventsToDisplay: '',
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

               <div className='browse'>
               <Container>
                    <Jumbotron className="jumbotron-main" sm="12"></Jumbotron>
                    <Row>
                        <Col>
                            <FilterInput value={this.state.filterValue} handleFilterChange={this.handleFilterChange} />
                            
                        </Col>
                        <Col>
                            <img src={calendar} alt="calendar"/>

                        </Col>
                    </Row>
                    <Row>
                        <EventList events={this.state.EventsToDisplay} />
                    </Row>
                    
                </Container>
            </div>
            )
    }
}



export default Browse