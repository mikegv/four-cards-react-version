import React from 'react';

const Card = (props) => {
    const borderColor = props.color;
    return (
        <div class="card" id={props.label} style={{borderTop: "3px solid " + borderColor}}>
            <div class="top">
                <h3>{props.label}</h3>
                {props.description}
            </div>
            <div class="bottom">
                <img src={process.env.PUBLIC_URL + props.logo} height="50" width="50" alt={props.label} />;
            </div>
        </div>

    );
};

export default Card;