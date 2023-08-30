import { React, useContext, useState, useEffect, useRef } from "react";
import MadorPage from "./madorComponents/madorPage";
import './mador.css';
import { useAllCities } from "../addOns/soldiersHooks";
import { AppContext } from "../addOns/AppProvider";
import Popup from 'reactjs-popup'
import OrderSelect from "./madorComponents/orderSelect";



function Mador() {
    const { error, soldiersData, setSoldiersData, setIsChanged, setSelected, isSaved, setIsSaved, isPending, setIsPending, newSoldiersData, setNewSoldiersData } = useContext(AppContext);
    const [isClick, setIsClick] = useState(false)

    const [showPopup, setShowPopup] = useState(false);
    const { data, isPending2 } = useAllCities("getAllSoldiers", false)
    const [isClosed, setIsClosed] = useState(true)
    const popRef = useRef(null)
    setIsPending(false)
    console.log(isClosed)
    const handleButtonClick = () => {
        // Perform your action here before showing the popup
        //console.log(data)
        //console.log(sol)
        if (!isSaved) {
            setSoldiersData(data)
            //setNewSoldiersData(data)
        } else {
            setNewSoldiersData(soldiersData)
        }
        //setIsSaved(false)
        setShowPopup(true);
    };
    function changeIsClosed() {
        setIsClosed(!isClosed)
    }

    useEffect(() => {
        //setSoldiersData(data)
        setNewSoldiersData(data)
    }, [data])

    // useEffect(() => {
    //     console.log("here5")
    // }, [soldiersData])


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
                        {/* <OrderSelect /> */}

                        {!isPending ? <button className="Button" onClick={handleButtonClick}>
                            פתיחת חלון
                        </button> : <h1>Loading...</h1>}
                        <Popup key={2} className="popupPage"
                            closeOnDocumentClick={isClosed}
                            //open={innerPopupOpen}
                            ref={popRef}
                            open={showPopup}
                            onClose={changeClicked}
                            position="center center"
                        >
                            <MadorPage changeClicked={changeClicked}
                                changeIsClosed={changeIsClosed} />
                        </Popup>

                        {/* {!isClick ?
                            <button className="Button" onClick={() => {
                                setSoldiersData(data)
                                setIsClick(!isClick)
                                setIsChanged(false)
                                setSelected([])
                            }}>פתיחת חלון</button>
                            :
                            <>
                              
                                <MadorPage changeClicked={changeClicked} />
                            </>
                        } */}
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


// {
//     <Popup trigger={<button className="Button">פתיחת חלון</button>}
//         position="center center"
//         closeOnDocumentClick={false}>
//     <MadorPage />

// </Popup>
// }

