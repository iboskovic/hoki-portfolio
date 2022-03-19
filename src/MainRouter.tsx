import React from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './app/pages/landing/Landing';


const MainRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
        </Switch>
    )
}

export default MainRouter;