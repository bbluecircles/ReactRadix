import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utilities/PrivateRoute';
import AdhocIMIC from './pages/AdhocIMIC/main';
import ESRISnapshot from './pages/ESRISnapshot/main';
import FullQueue from './pages/FullQueue/main';
import Login from './pages/Login/main';
import PhysicianSnapshot from './pages/PhysicianSnapshot/main';
import RetrievePassword from './pages/RetrievePassword/main';
import NotFound from './pages/NotFound';

import { isUserSignedIn} from './services/account/userService';

const App = () => {
    const isLoggedIn = isUserSignedIn();

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/Account/Login" element={<Login />} />
                <Route
                    exact
                    path="/"
                    element={<AdhocIMIC isLoggedIn={isLoggedIn}/>}
                />
                <Route
                    path="/Home/Dashboard"
                    element={<ESRISnapshot isLoggedIn={isLoggedIn}/>}
                />
                <Route
                    path="/Home/FullQueue"
                    element={<FullQueue isLoggedIn={isLoggedIn}/>}
                />
                <Route
                    path="/Home/PhysicianSnapshot"
                    element={<PhysicianSnapshot isLoggedIn={isLoggedIn}/>}
                />
                <Route
                    path="/Account/RetrievePassword"
                    element={<RetrievePassword isLoggedIn={isLoggedIn}/>}
                />
                <Route Component={NotFound} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;