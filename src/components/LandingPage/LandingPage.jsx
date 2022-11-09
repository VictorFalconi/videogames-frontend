import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'



export default function LandingPage(){
    return (
        <div className="body" >
            <h1 className="h1" >WELCOME</h1>
            <Link to = '/home'>
                <button className="button">ENTER</button>
            </Link>
        </div>

    );

};