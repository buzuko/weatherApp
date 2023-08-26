import React from "react";
import MadorHeader from "./madorHeader";
import Registration from "./registration";
import MadorSoldiers from "./madorSoldiers";


function MadorPage() {
    return (
        <div className="MadorPage">
            <MadorHeader />
            <Registration />
            <MadorSoldiers />
        </div>
    )
}

export default MadorPage;