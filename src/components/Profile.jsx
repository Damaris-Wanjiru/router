import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
const Profile = () => {
    const params = useParams()
    console.log(params)
    return(
        <>
            <NavBar />
            <h1 className="display-6">Profile Page {params.profileId}</h1>
        </>
    )
}
export default Profile;