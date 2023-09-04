import { React } from "react";
import MadorHeader from "./madorHeader";
import Registration from "./registration";
import MadorSoldiers from "./madorSoldiers";


function MadorPage({ changeClicked, changeIsClosed }) {
    //עיצובים מדוייקים כי אחרת זה נחשב באגים

    return (
        <div className="MadorPage">
            <MadorHeader changeClicked={changeClicked} />
            <Registration />
            <MadorSoldiers changeClicked={changeClicked} changeIsClosed={changeIsClosed} />
        </div>
    )
}

export default MadorPage;