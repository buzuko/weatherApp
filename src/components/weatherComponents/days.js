import React, { useState } from "react";
import '../Weather.css';
//import sun_no_background from "./sun_no_background.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Day from "./day";
import { faCloud } from '@fortawesome/free-solid-svg-icons';



function Days() {

    return (
        <body className="Days">
            <Day time={"מחר"}
                num={1}
            />
            <Day time={"עוד יומיים"}
                num={2}
            />
            <Day time={"עוד שלושה ימים"}
                num={3}
            />
            <Day time={"עוד ארבעה ימים"}
                num={4}
            />
        </body>
    )
}

export default Days;