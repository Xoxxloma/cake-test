import React from 'react';
import './SortField.scss';
import { useDispatch } from 'react-redux';
import { sortData, setSearch } from '../../features/events/eventSlice';

const SortField = () => {
  const dispatch = useDispatch()

  return (
    <div className="wrapper">
      <div className="sort">
      Sort by:
      <label className="sort-label">
        <input className="sort-input" type="radio" name="sort" onChange={() => dispatch(sortData({field: 'price', sort:'desc'}))}/>
        <span className="sort-fake"></span>
        <span className="sort-text">Price desc</span>
      </label>
      <label className="sort-label">
        <input className="sort-input" type="radio" name="sort" onChange={() => dispatch(sortData({field: 'price', sort:'asc'}))}/>
        <span className="sort-fake"></span>
        <span className="sort-text">Price asc</span>
      </label>
      </div>
      <div className="filter">
        Filter by:
      <label className="sort-label">
        <input className="sort-input" type="radio" name="filter" onChange={() => dispatch(setSearch('movie'))}/>
        <span className="sort-fake"></span>
        <span className="sort-text">Movies</span>
      </label>
      <label className="sort-label">
        <input className="sort-input" type="radio" name="filter" onChange={() => dispatch(setSearch('concert'))}/>
        
        <span className="sort-fake"></span>
        <span className="sort-text">Concerts</span>
      </label>
      <label className="sort-label">
        <input className="sort-input" type="radio" name="filter" onChange={() => dispatch(setSearch('festival'))}/>
        <span className="sort-fake"></span>
        <span className="sort-text">Festivals</span>
      </label>
      <label className="sort-label">
        <input className="sort-input" type="radio" name="filter" onChange={() => dispatch(setSearch(''))}/>
        <span className="sort-fake"></span>
        <span className="sort-text">All</span>
      </label>
      </div>
    </div>
  )
}

export default SortField;