import React from "react";
import { Navigate } from "react-router-dom";


const PhysicianSnapshot = ({ isLoggedIn }) => {
    if (!isLoggedIn) return <Navigate to="/Account/Login" />

    return <>Physician Snapshot</>                                                                                                                                                                                                              
}                               

export default PhysicianSnapshot