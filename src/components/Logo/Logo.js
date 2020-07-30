import React from 'react';
import Png from "./logo_transparent.png";
import "./Logo.css";


const Logo = () => {
    return (
        <div id={"Logo"} className={"grow"}>
                <img src={Png} className={"w-100"} alt={"Logo"}/>
        </div>
    );
}

export default Logo;
