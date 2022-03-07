import React from "react";
import RightCard from "../rightcard/RightCard";
import Left from "../left/Left";
import Middle from "../middle/Middle";
import './Top.css';
import Logo from './supervisor.svg';

const Top = () => {
    return(
        <div>
            <div id="main">
                <h2>Reliable, efficient delivery</h2>
                <h2>Powered by Technology</h2>
                
                <img src={Logo} height="20" width="20" />

                Our Artificial Intelligence powered tools use millions of project data points 
                to ensure that your project is successful
            </div> 
            <div id="cards">
                <Left />
                <Middle />
                <RightCard />
            </div>
        </div>
    )
}

export default Top;

