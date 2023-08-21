import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
function HeaderRouter() {

    return (
        <div className="HeaderRouter">
            <Link to={"/ConectPage"} className="links">ראשי</Link>
            <Link to={"/ConectPage"} className="links">משני</Link>
        </div>
    )
}

export default HeaderRouter;