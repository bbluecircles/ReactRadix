import React from "react";
import { Navigate } from "react-router-dom";

const FullQueue = ({ isLoggedIn }) => {
    if (!isLoggedIn) return <Navigate to="/Account/Login" />
    
    return <>Full Queue</>
}

export default FullQueue;