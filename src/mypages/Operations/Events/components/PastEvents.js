import React, { Component } from 'react';

//CSS file
import './../Events.css';


//Assets
import MoreEventsButtonArrow from './../assets/MoreEventsButtonArrow.svg'
import CovidCampaign from './../assets/CovidCampaign.webp';
import Zest from './../assets/Zest.webp';
import PrintingWorkshop from './../assets/PrintingWorkshop.webp';
import AppDevelopment from './../assets/AppDevelopment.webp';
import IndependenceWeek from './../assets/IndependenceWeek.webp';


//Components
import EventCard from './EventCard';

/* Main page starts here */
class PastEvents extends Component {
  state = {
    MoreEventsVisible: false
  };
  render() {
    const buttonText = this.state.MoreEventsVisible ? 'Less Past Events' : 'More Past Events';
    return (
      <div>
        <div className="body-wrap">
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
                  <h1 className="sub-title">Past Events</h1>
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

                      {
                        /* 
                        Note:Only first 4 Event Cards should be updated here
                        Remaining Event cards should be updated in More Past Events at below
                        */
                      }

                      <EventCard
                        EventImage={IndependenceWeek}
                        EventTitle="Independence Week 2020"
                        EventDescription="Independence Day is a day when India pays homage to the 
                                        Heroes of the motherland and reckon the grandeur of their
                                        civilization."
                        EventDate="09 Aug - 15 Aug 2020"
                        EventPlace="Telangana"
                      />

                      <EventCard
                        EventImage={CovidCampaign}
                        EventTitle="Digital COVID-19 Campaign Corona"
                        EventDescription="Coronavirus disease (COVID-19) is an infectious disease 
                                        caused by a newly discovered coronavirus. Most people 
                                        who will be having breathing problems especially older 
                                        people they can easily infect."
                        EventDate="18 March - 28 April 2020"
                        EventPlace="Telangana"
                      />

                      <EventCard
                        EventImage={Zest}
                        EventTitle="Zest - Discover the Future"
                        EventDescription="To grow into well-functioning adults, youth must learn 
                                        key life skills. Life skills include critical thinking, 
                                        decision-making, effective communication, as well as 
                                        skills for developing healthy relationships and positive 
                                        self-concepts."
                        EventDate="17 Jan 2020"
                        EventPlace="Telangana"
                      />

                      <EventCard
                        EventImage={PrintingWorkshop}
                        EventTitle="3D Printing Workshop"
                        EventDescription="3D printing is already shaking our old-age notions of 
                                        what can and can't be made. 3D printing or additive 
                                        manufacturing is a process of making three dimensional 
                                        solid objects from a digital file."
                        EventDate="10 March - 11 March 2019"
                        EventPlace="Telangana"
                      />



                      {
                        /*
                        More Past Event Cards 
                        The following EventCards are displayed only when More Past Events button
                        is clicked. 
                        */
                      }

                      {
                        this.state.MoreEventsVisible ?
                          <>
                            <EventCard
                              EventImage={AppDevelopment}
                              EventTitle="App Development Workshop"
                              EventDescription="Delivering digital transformation with mobile apps that
                                        enable to do business - anytime, anywhere."
                              EventDate="3 March - 4 March 2019"
                              EventPlace="Telangana"
                            />
                          </>
                          :
                          null
                      }
                    </div>
                  </div>
                </div>
                
                {/*
More Events Button
Displays More Past Events when clicked for first time
Displays none when clicked again 
*/}
                <div className="row">
                  <div className="columns">
                    <p
                      onClick={() => {
                        this.setState({ MoreEventsVisible: !this.state.MoreEventsVisible })
                      }
                      }
                    >
                      <div className="past-events-button">
                        {buttonText}
                        <img className="link-nub__right-icon" src={MoreEventsButtonArrow} alt="Arrow Icon" />
                      </div>
                    </p></div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default PastEvents;