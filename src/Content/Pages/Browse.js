import React from 'react'
import FilterInput from './FilterInput'
import EventList from './EventList'

class Browse extends React.Component{

    state = {
        eventsToDisplay = this.props.events,
        filterValue: ''
    }

    handleFilterChange = e => {
        e.preventDefault()
        const filterValue = e.target.value;
        this.setState((prevState, props) => {
            const filteredEvents = props.events.filter(event => 
            event.toLowerCase().includes(filterValue.toLowerCase()))
            return {
                eventsToDisplay: filteredEvents,
                filterValue
            }
        })
    }
    render () {
        return (
            <div className='app'>
            <FilterInput value={this.state.filterValue} handleFilterChange={this.handleFilterChange} />
            <EventList fruits={this.state.EventsToDisplay} />
            </div>
        )
    }
}






export default Browse