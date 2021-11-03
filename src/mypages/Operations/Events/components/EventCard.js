import React from 'react';

/* CSS file */
import './../Events.css';

/* Main page starts here */
const EventCard = (props) => {
  return (
    <>
    <article className="tout tout--default tout--event">
                        <a
                          className="tout__link"
                          href="/operations/events"
                          >
                          <figure className="placeholder small">
                            <div className="placeholder-inner">
                              <img
                                loading="lazy"
                                className="js-lazyload loaded"
                                src={props.EventImage} alt={props.EventTitle+' Image'}
                              />
                            </div>
                          </figure>
                          <div className="tout__details">
                            <h3 className="tout__title">
                              {props.EventTitle}
                            </h3>
                            <p className="tout__description">
                              {props.EventDescription}
                        </p>
                            <div className="tout__meta">
                              <div className="caption">
                                <span>{props.EventDate}&nbsp;</span>
                                <span>{props.EventPlace}</span>
                              </div>
                            </div>
                          </div>
                          </a>
                      </article>
          </>
  )
}
export default EventCard;