import { React, useEffect, useState, useContext } from "react";
import exitIcon from "../../addOns/exitIcon.png"
import iconsChange from "../../addOns/iconsChange.png"
import { AppContext } from "../../addOns/AppProvider";


function MadorHeader({ changeClicked }) {
    const [currentTime, setCurrentTime,] = useState(new Date());
    const { setSoldiersData, newSoldiersData } = useContext(AppContext);


    // מעדכן את התאריך כל שניה
    useEffect(() => {
        const timeID = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);

    }, [])
    const day = currentTime.getDay();
    const month = currentTime.getMonth();
    const year = currentTime.getFullYear();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    function clicked() {
        setSoldiersData(newSoldiersData)
        changeClicked()
    }

    return (
        <div className="MadorHeader">
            <img src={exitIcon} className="exit" alt="Exit Icon" onClick={clicked} />
            <div className="line"></div>
            <div className="Rectangle">
                <div className="topIcon">
                    <img src={iconsChange} className="iconsChange" alt="iconsChange" />
                </div>
                <div className="RectangleText">
                    <h3>חיילי המדור</h3>
                    <p className="time">{`${hours}:${minutes}:${seconds} ${day}/${month}/${year}`}</p>
                </div>
            </div>
        </div>
    )
}

export default MadorHeader;