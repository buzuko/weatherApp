import React from "react";
import ManImg from "../../addOns/ManImg.png"
import swordIMG from "../../addOns/swordIMG.png"
import woman from "../../addOns/woman.png"


function SoldierCard({ key, item }) {
    return (
        <div className="SoldierCard">
            <div className="SoldierCard-imeges">

                <div className="SoldierCard-icon">
                    <img src={item.Gender === "ז" ? ManImg : woman} className="dayLogo" alt="dayLogo" />
                    {item.Is_Officer && <img src={swordIMG} class="IconsRankkatzin"></img>}
                </div>

            </div>
            <div className="SoldierCard-text">
                <span class="SoldierCard-name">
                    {item.First_Name + " " + item.Last_Name}
                </span>
                <span class="SoldierCard-title">
                    {item.Role + ", " + item.Age}
                </span>
                <span class="SoldierCard-place">
                    {item.Role + ", " + item.Rank}
                </span>
            </div>
        </div>
    )
}

export default SoldierCard;