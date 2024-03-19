import React from "react";
import { Navigate } from "react-router-dom";

const ESRISnapshot = ({ isLoggedIn }) => {
    if (!isLoggedIn) return <Navigate to="/Account/Login" />

    return <>ESRI Snapshot</>
}

export default ESRISnapshot;