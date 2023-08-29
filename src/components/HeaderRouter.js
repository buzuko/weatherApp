import { React, useEffect, useContext, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
function HeaderRouter() {
    return (
        <div className="HeaderRouter">
            <Link to={"/Login"} className="LoginLink" >ראשי</Link>
            <Link to={"/WeatherPage"} className="WeatherLink" >ראשי</Link>
            <button className="HeaderRouterExit">exit</button>
        </div>
    )
}

export default HeaderRouter;