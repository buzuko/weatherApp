import React, { useState } from "react";
import '../Weather.css';
import sun_no_background from "./sun_no_background.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon={faCloud} />

function Days() {

    return (
        <body className="Days">
            <div className="dayData">
                <h5>מחר</h5>
                <FontAwesomeIcon icon={faCloud} className="icon" />
                <p>טמפ</p>

            </div>
            <div className="dayData">
                <h5>בעוד יומיים</h5>
                <FontAwesomeIcon icon={faCloud} className="icon" />
                <p>טמפ</p>

            </div>
            <div className="dayData">
                <h5>בעוד שלושה ימים</h5>
                <FontAwesomeIcon icon={faCloud} className="icon" />
                <p>טמפ</p>

            </div>
            <div className="dayData">
                <h5>בעוד ארבעה ימים</h5>
                <FontAwesomeIcon icon={faCloud} className="icon" />
                <p>טמפ</p>
            </div>
        </body>
    )
}

export default Days;