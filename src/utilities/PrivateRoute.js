import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        element={
            isLoggedIn ? <Element {...props} /> : <Navigate to="/Account/Login" replace />
        }
    />
);

export default PrivateRoute;