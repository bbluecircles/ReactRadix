import React from 'react';
import { Navigate } from "react-router-dom";


const AdhocIMIC = ({ isLoggedIn }) => {
    if (!isLoggedIn) return <Navigate to="/Account/Login" />
    
    return (<>
        <div>
            <h1>adhocIMIC</h1>
        </div>
    </>);
}

export default AdhocIMIC;