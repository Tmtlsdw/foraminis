import React from 'react';
import Png from "./logo_transparent.png";
import "./Logo.css";


const Logo = () => {
    return (
        <div id={"Logo"} className={"grow"}>
            <a href={"/"}>
                <img src={Png} className={"w-100"} alt={"Logo"}/>
            </a>
        </div>
    );
}

export default Logo;
