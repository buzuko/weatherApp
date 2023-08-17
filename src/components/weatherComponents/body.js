import React, { useState } from "react";
import '../Weather.css';
import sun_no_background from "./sun_no_background.jpg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloud } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon={faCloud} />

function Body() {

    return (
        <body className="body">
            <img src={sun_no_background} className="sun_no_background" alt="sun_no_background" />
            <div className="todayData">
                <h5>היום</h5>
                <h2>{"city"}</h2>
                <p>:טמפרטורה</p>
                <p>עינון</p>

            </div>
        </body>
    )
}

export default Body;