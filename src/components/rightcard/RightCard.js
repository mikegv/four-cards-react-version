import React from "react";
import "./RightCard.css"


const RightCard = () => {
    return(     

  <div class="side">
    <div class ="card" id="calculator">
      <div class="top">
        <h3>Calculator</h3>
      Uses data from past projects to provide better delivery estimates
      </div>
      <div class="bottom">
       <img src={process.env.PUBLIC_URL + '/icon-calculator.svg'} height="50" width="50" alt="computer" />;
      </div> 
    </div>
  </div>

    )
}

export default RightCard;