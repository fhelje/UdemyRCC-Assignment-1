import React from "react";
import "./UserInput.css";

const UserInput = ({ username, changed }) => {
    return (
        <div className="InputCard">
            <input type="text" onChange={changed} value={username} />
        </div>
    );
};

export default UserInput;
