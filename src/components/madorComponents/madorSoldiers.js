import { React, useContext, useRef, useState } from "react";
import { AppContext } from "../../addOns/AppProvider";
import SoldierCard from "./soldierCard";



function MadorSoldiers() {
    const { soldiersData } = useContext(AppContext);

    const [selectedOption, setSelectedOption] = useState('עיר');


    const cards = soldiersData.map(item => {
        return (
            <SoldierCard
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div className="MadorSoldiers">
            <div className="selection">
                <span className="orderBy">
                    :סדר לפי
                </span>
                <select className="MadorSoldiers-options" onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();'>
                    <option key={1} >
                        עיר
                    </option>

                    <option key={2} >
                        מיקום עיר בארץ
                    </option>
                    <option key={3} >
                        מין
                    </option>
                    <option key={4} >
                        תפקיד + דרגה
                    </option>
                </select>
                {/* <select onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();'>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select> */}
            </div>
            <div className="selectCard">
                {cards}
            </div>
            <button className="save"><span>
                שמירה
            </span></button>
        </div>
    )
}

export default MadorSoldiers;