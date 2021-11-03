import React from 'react';

//CSS file
import './../Events.css';

//Assets
import AntiCorona from './../assets/AntiCorona.webp';

//Components
import EventCard from './EventCard';

//Ongoing Events Section
const OngoingEvents = () => {
  return (
    <div>
        <div className="body-wrap" style={{marginTop:"50px"}}>
          <div className="content-container">
            <section className="content-container--content">
              <section
                className="
              row
              tout-list-container
              tout-list-container--events
              tout-list-container--future-events
            "
              >
                <div className="columns">
                    <h1 className="sub-title">Ongoing Events</h1>
                  <div
                    className="
                  tout-list
                  tout-list--events
                  tout-list--grid
                  tout-list--grid
                  tout-list--grid-x2
                  tout-list--future-events
                "
                  >
                    <div className="tout-list--grid__container">
                    <EventCard 
                      EventImage={AntiCorona}
                      EventTitle="Operation Anti-Corona"
                      EventDescription="Coronavirus disease (COVID-19) is an infectious disease 
                                        caused by a newly discovered coronavirus. Most people 
                                        who will be having breathing problems especially older 
                                        people they can easily infect."
                      EventDate="25 May 2021"
                      EventPlace="Telangana"
                      />
                     
                    </div>
                  </div>
                </div>
              </section>
              </section>
              </div>
              </div>
              </div>
  )
}
export default OngoingEvents;