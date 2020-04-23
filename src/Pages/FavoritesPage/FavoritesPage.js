import React from "react";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.events.favorites);


  return (
    <>
      <h1 className="header">Your favorites events</h1>
      {favorites.length === 0 ? (
        <div className="header">You have no favorites events yet</div>
      ) : (
        <div className="card-container">
          {favorites.map((item) => (
            <React.Fragment key={item.id}>
              <Card item={item} fav={true} />
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
