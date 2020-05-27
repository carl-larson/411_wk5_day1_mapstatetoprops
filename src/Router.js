import React from 'react'
import { Switch, Route } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import About from './components/About'
import CarContainer from './containers/CarContainer'
import DashboardContainer from './containers/DashboardContainer'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={CarContainer} />
            <Route path="/dashboard" component={DashboardContainer} />
        </Switch>
    );
};

export default Router;