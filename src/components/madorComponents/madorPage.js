import { React, useState, useContext } from "react";
import MadorHeader from "./madorHeader";
import Registration from "./registration";
import MadorSoldiers from "./madorSoldiers";
import { AppContext } from "../../addOns/AppProvider";


function MadorPage({ changeClicked }) {
    const { soldiersData, setSoldiersData } = useContext(AppContext);

    const [a, setA] = useState(0);

    const incrementCounter = () => {
        setA(a + 1);
    };
    return (
        <div className="MadorPage">
            <MadorHeader changeClicked={changeClicked} />
            <Registration incrementCounter={incrementCounter} />
            <MadorSoldiers a={a} changeClicked={changeClicked} />
        </div>
    )
}

export default MadorPage;