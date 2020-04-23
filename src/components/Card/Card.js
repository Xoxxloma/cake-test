import React from "react";
import "./Card.scss";
import { useDispatch } from "react-redux";
import { addToFav, deleteFromFav } from "../../features/events/eventSlice";
import { Link } from "react-router-dom";

const Card = ({ item, fav }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-image">
        <img className="card-image__img" src={item.image} alt="event" />
      </div>
      <div className="card-title">{item.title}</div>
      <div className="card-content">
        <p>{item.description}</p>
      </div>
      <div className="card-price">
        <p name="price">Price: {item.price > 0 ? `${item.price} ₽` : "Free"}</p>
      </div>
      <div className="card-actions">
        {fav ? (
          <button
            className="card-actions__fav"
            onClick={() => dispatch(deleteFromFav(item))}
          >
            delete
          </button>
        ) : (
          <button
            className="card-actions__fav"
            onClick={() => dispatch(addToFav(item))}
          >
            add to fav
          </button>
        )}
        <Link to={"/details/" + item.id} className="card-actions__details">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
