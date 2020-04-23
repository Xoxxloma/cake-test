import { createSlice } from "@reduxjs/toolkit";
import {orderBy} from "lodash";

export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    favorites: [],
    pickedEvent: {},
    search: ""
  },
  reducers: {
    fetchEvents: (state, action) => {
      state.events = action.payload;
    },
    fetchEvent: (state, action) => {
      const item = state.events.find((x) => x.id === action.payload);
      if (!item) {
        return state;
      } else {
        state.pickedEvent = item
      }
    },
    addToFav: (state, action) => {
      const item = state.favorites.find((x) => x.id === action.payload.id);
      if (!item) {
        state.favorites = [...state.favorites, action.payload];
      } else {
        return state;
      }
    },
    deleteFromFav: (state, action) => {
      state.favorites = state.favorites.filter((i) => i.id !== action.payload.id);
    },
    sortData: (state, action) => {
      state.events = orderBy(state.events, action.payload.field , action.payload.sort)
      console.log(action.payload)
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    // filterData: (state) => {
    //   if (!state.search) {
    //     return state.events;
    //   }
    //   return state.events.filter(i => i.categories.includes(state.search))
    // }
  },
});

export const {
  fetchEvents,
  fetchEvent,
  addToFav,
  deleteFromFav,
  sortData,
  setSearch,
  filterData
} = eventsSlice.actions;

export default eventsSlice.reducer;
