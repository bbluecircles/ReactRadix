import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utilities/PrivateRoute';
import AdhocIMIC from './pages/AdhocIMIC/main';
import ESRISnapshot from './pages/ESRISnapshot/main';
import FullQueue from './pages/FullQueue/main';
import Login from './pages/Login/main';
import PhysicianSnapshot from './pages/PhysicianSnapshot/main';
import RetrievePassword from './pages/RetrievePassword/main';
import NotFound from './pages/NotFound';

const App = ({ isLoggedIn }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/Account/Login" Component={Login} />
                <PrivateRoute
                    exact
                    path="/"
                    component={AdhocIMIC}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRoute
                    path="/Home/Dashboard"
                    component={ESRISnapshot}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRoute
                    path="/Home/FullQueue"
                    component={FullQueue}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRoute 
                    path="/Home/PhysicianSnapshot"
                    component={PhysicianSnapshot}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRoute
                    path="/Account/RetrievePassword"
                    component={RetrievePassword}
                    isLoggedIn={isLoggedIn}
                />
                <Route Component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App;