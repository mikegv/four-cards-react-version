import React from "react";

const Left = () => {
    return(

        <div class="side">
          <div class="card" id="supervisor">
            <div class="top">
            <h3>Supervisor</h3>
            Monitors activity to identify project roadblocks
            </div>
            <div class="bottom">
            <img src={process.env.PUBLIC_URL + '/icon-supervisor.svg'} height="50" width="50" alt="supervisor"  />;
            </div>
          </div>
        </div>
    )
}

export default Left;