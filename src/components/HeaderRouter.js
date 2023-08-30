import { React, useEffect, useContext, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { AppContext } from "../addOns/AppProvider";
function HeaderRouter() {
    const { localStorageNum, setCurrent, current, weatherData } = useContext(AppContext);
    const [num, setNum] = useState(localStorageNum)
    const data = localStorage.getItem("weatherData")
    function exitAll() {
        setNum(item => item + 1)
        localStorage.getItem("lastSearches") && localStorage.setItem("lastSearches", [])
        localStorage.getItem("userName") && localStorage.clear();
    }
    function returnMain() {
        //console.log(JSON.parse(data).length)
        //console.log(JSON.parse(data)[JSON.parse(data).length - 1])

        JSON.parse(data).length && setCurrent(JSON.parse(data)[JSON.parse(data).length - 1])
    }

    return (
        <div className="HeaderRouter">
            <Link to={"/login"} className="links" onClick={returnMain}>ראשי</Link>

            {localStorage.getItem("lastSearches") ? <Link to={"/History"} className="links">היסטוריה - {localStorage.getItem("lastSearches") ? JSON.parse(localStorage.getItem("lastSearches")).length : "0"}</Link>
                :
                <p className="links">היסטוריה - 0</p>
            }
            <Link to={"/Login"} className="HeaderRouterExit" onClick={exitAll} >התנתקות</Link>


        </div>
    )
}

export default HeaderRouter;