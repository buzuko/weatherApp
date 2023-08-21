import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
function HeaderRouter() {

    return (
        <div className="HeaderRouter">
            <Link to={"/"} className="links">ראשי</Link>
            <Link to={"/"} className="links">משני</Link>
        </div>
    )
}

export default HeaderRouter;