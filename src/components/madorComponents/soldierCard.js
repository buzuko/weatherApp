import { React, useRef, useState, useContext, useEffect } from "react";
import ManImg from "../../addOns/ManImg.png"
import swordIMG from "../../addOns/swordIMG.png"
import woman from "../../addOns/woman.png"
import { AppContext } from "../../addOns/AppProvider";



function SoldierCard({ key, item }) {
    const { selected, setSelected, soldiersData } = useContext(AppContext);
    const divRef = useRef(null)
    const [checked, setChecked] = useState(false)
    let newArray = selected ? [...selected] : []

    // מעדכן אם הכרטיס נבחר
    useEffect(() => {
        if (selected && selected.includes(item)) {
            setChecked(true)
        }
        else (
            setChecked(false)
        )

    }, [selected])

    // בוחר את הכרטיס
    function handleChange() {
        setChecked(!checked)

        if (checked) {
            newArray = selected.filter(info => info !== item);
        } else {
            newArray.push(item)

        }
        setSelected(newArray)
    }

    return (
        <div className="SoldierCard" ref={divRef} onClick={handleChange}>
            <input
                className="checkbox"
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <div className="SoldierCard-imeges">
                <div className="SoldierCard-icon">
                    <img src={item.Gender === "ז" ? ManImg : woman} className="genderLogo" alt="dayLogo" />
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