import { React, useEffect, useContext, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
function HeaderRouter() {
    function exitAll() {
        localStorage.getItem("userName") && localStorage.clear();
    }
    return (
        <div className="HeaderRouter">
            {<Link to={"/Login"} className="LoginLink" >הרשמה</Link>}
            {localStorage.getItem("userName") && <Link to={"/WeatherPage"} className="WeatherLink" >כניסה</Link>}
            <Link to={"/Login"} className="HeaderRouterExit" onClick={exitAll} >התנתקות</Link>
        </div>
    )
}

export default HeaderRouter;