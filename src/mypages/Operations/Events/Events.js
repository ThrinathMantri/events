import React from 'react';
import OngoingEvents from './components/OngoingEvents';
import PastEvents from './components/PastEvents';


/* Main page starts here */
const EventsPage = () => {
  return (
      <>
        <OngoingEvents />
        <PastEvents />
    </>
  )
}

export default EventsPage;