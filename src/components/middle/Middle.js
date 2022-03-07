import React from "react";
import "./Middle.css"

const Middle = () => {
    return(
      
  <div class="cardholder">
   
    <div class ="card" id="team">
      <div class="top">
      <h3>Team Builder</h3>
      Scans our talent network to create the optimal team for your project
      </div>
      <div class="bottom">
      <img src={process.env.PUBLIC_URL + '/icon-team-builder.svg'} height="50" width="50" alt="team"  />;
      </div>
    </div>

    <div class ="card" id="karma">
      <div class="top">
      <h3>Karma</h3>
      Regularly evaluates our talent to ensure quality
      </div>
      <div class="bottom">
      <img src={process.env.PUBLIC_URL + '/icon-karma.svg'} height="50" width="50" alt="karma"  />;  
      </div>
    </div>

</div>
    )
}

export default Middle;