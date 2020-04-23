import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import data from "../../events.json";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../features/events/eventSlice";
import InputField from "../../components/InputField/InputField";
import SortField from "../../components/SortField/SortField";

const CardContainer = () => {
  const events = useSelector((state) => state.events.events);
  const search = useSelector((state) => state.events.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents(data));
  }, [dispatch]);

  
  const filtered = () => {
    if (!search) {
      return events;
    }
    return events.filter(i => {
      return i.categories.includes(search)
      || i['body'].toLowerCase().includes(search.toLowerCase())
      || i['description'].toLowerCase().includes(search.toLowerCase())
      || i['title'].toLowerCase().includes(search.toLowerCase())
    })
  };

  // to test filter use words: test 2, hello world, find me or add something new in events.json file

  const filteredData = filtered()

  return (
    <>
      <h1 className="header">Events in your town</h1>
      <InputField />
      <SortField />
      <div className="card-container">
        {filteredData.map((item) => (
          <React.Fragment key={item.id}>
            <Card item={item} fav={false} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default CardContainer;
