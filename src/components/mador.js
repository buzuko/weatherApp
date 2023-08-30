import { React, useContext, useState, useEffect, useRef } from "react";
import MadorPage from "./madorComponents/madorPage";
import './mador.css';
import { useAllCities } from "../addOns/soldiersHooks";
import { AppContext } from "../addOns/AppProvider";
import Popup from 'reactjs-popup'



function Mador() {
    const { error, soldiersData, setSoldiersData, setIsChanged, setSelected, isSaved, isPending, setIsPending, setNewSoldiersData } = useContext(AppContext);
    const [isClick, setIsClick] = useState(false)

    const [showPopup, setShowPopup] = useState(false);
    const { data, isPending2 } = useAllCities("getAllSoldiers", false)
    const [isClosed, setIsClosed] = useState(true)
    const popRef = useRef(null)
    setIsPending(false)
    console.log(isClosed)

    // סוגר את הפופאפ
    const handleButtonClick = () => {

        if (!isSaved) {
            setSoldiersData(data)
        } else {
            setNewSoldiersData(soldiersData)
        }
        setShowPopup(true);
    };

    function changeIsClosed() {
        setIsClosed(!isClosed)
    }

    useEffect(() => {
        setNewSoldiersData(data)
    }, [data])

    // עדכון משתנים בסגירה
    function changeClicked() {
        setIsClick(!isClick)
        setIsChanged(false)
        setSelected([])
        setShowPopup(false)
    }

    return (
        <div className="Mador" >
            {!isPending2 ?
                !error ?
                    <>

                        {!isPending ? <button className="Button" onClick={handleButtonClick}>
                            פתיחת חלון
                        </button> : <h1>Loading...</h1>}

                        <Popup key={2} className="popupPage"
                            closeOnDocumentClick={isClosed}
                            ref={popRef}
                            open={showPopup}
                            onClose={changeClicked}
                            position="center center"
                        >
                            <MadorPage changeClicked={changeClicked}
                                changeIsClosed={changeIsClosed} />
                        </Popup>

                    </>
                    :
                    <h1>{error}</h1>
                :
                <h1>Loading...</h1>
            }
        </div>
    )
}

export default Mador;
