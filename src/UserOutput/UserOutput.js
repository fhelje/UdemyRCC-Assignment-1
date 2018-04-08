import React from "react";
import "./UserOutput.css";

const UserOutput = ({ username }) => {
    return (
        <div className="OutputCard">
            <p>The user is:</p>
            <p>{username}</p>
        </div>
    );
};

export default UserOutput;
