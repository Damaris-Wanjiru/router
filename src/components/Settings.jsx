import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

const Settings = () => {
    const params = useParams
    console.log(params)
    return(
        <>
        <NavBar />
        <h1 className="display-6">Settings Page {settingsId}</h1>
        </>
    )
}
export default Settings;