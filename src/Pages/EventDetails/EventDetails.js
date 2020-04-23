import React, { useEffect } from "react";
import "./EventDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvent } from "../../features/events/eventSlice";
import { Link } from "react-router-dom";

const EventDetails = ({ match }) => {
  const itemId = +match.params.id;
  const dispatch = useDispatch();
  const event = useSelector((state) => state.events.pickedEvent);

  useEffect(() => {
    dispatch(fetchEvent(itemId));
  }, [dispatch, itemId]);

  if (Object.keys(event).length === 0) {
    return <div>Pick some interesting event to see more</div>;
  }
  return (
    <div className="event-container">
    <div className="event">
      <h1 className="header">Event: {event.title}</h1>
      <div className="event-image">
        <img className="event-image__img" src={event.image} alt="event" />
      </div>
      <div className="event-desc">
        <h2>{event.description}</h2>
        <p className="event-desc__text">{event.body}</p>
        <div className="event-desc__footer">
          <p className="event-desc__footer-price">Price: {event.price > 0 ? `${event.price} ₽` : "Free"}</p>
          <Link to="/" className="event-desc__footer-link">Back to Main Page</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventDetails;
