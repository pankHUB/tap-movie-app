import React from 'react';
import { Route, Switch } from "react-router-dom";

import AddMovie from "./AddMovie.js";
import Home from "./Home.js";
import Moviedetails from "./MovieDetails.js";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact> 
            <Home/>
            </Route>
            <Route path="/add-movie" exact> 
            < AddMovie />
            </Route>
            <Route path="/:movieId" exact> 
            < Moviedetails />
            </Route>
        </Switch>
    )
}

export default Routes;
