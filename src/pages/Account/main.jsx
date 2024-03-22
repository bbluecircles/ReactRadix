import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/main";

const Account = () => {
    return(
        <Routes>
            <Route 
                path="Login" 
                element={<Login />} 
            />
        </Routes>
    )
}

export default Account;