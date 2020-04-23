import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CardContainer from "./Pages/CardContainer/CardContainer";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage";
import EventDetails from "./Pages/EventDetails/EventDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
        <Route path="/" component={CardContainer} exact />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/details/:id" component={EventDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
