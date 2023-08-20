import React from "react";
import '../Weather.css';
import Day from "./day";

function Days() {

    return (
        <div className="Days">
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
        </div>
    )
}

export default Days;