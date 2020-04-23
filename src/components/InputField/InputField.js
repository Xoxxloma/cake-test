import React, { useState } from "react";
import "./InputField.scss";
import { setSearch } from "../../features/events/eventSlice";
import { useDispatch } from "react-redux";

const InputField = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(setSearch(query));
    }
  };

  return (
    <div className="input">
      <input
        className="input-field"
        type="text"
        value={query}
        id="search"
        placeholder="Your query"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => searchHandler(e)}
      />
    </div>
  );
};

export default InputField;
