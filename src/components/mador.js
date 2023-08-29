import { React, useContext, useState, useEffect } from "react";
import MadorPage from "./madorComponents/madorPage";
import './mador.css';
import { useAllCities } from "../addOns/dataHooks";
import { AppContext } from "../addOns/AppProvider";
import Popup from 'reactjs-popup'
import OrderSelect from "./madorComponents/orderSelect";



function Mador() {
    const { error, setSoldiersData, setIsChanged, setSelected, isSaved, setIsSaved } = useContext(AppContext);
    const [isClick, setIsClick] = useState(false)

    const { data, isPending2 } = useAllCities("getAllSoldiers", false)
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        // Perform your action here before showing the popup

        //console.log(data)
        //console.log(sol)
        !isSaved ? setSoldiersData(data) : setIsSaved(false)
        setShowPopup(true);
    };

    useEffect(() => {
        //setSoldiersData(data)
    }, [data])


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
                        <button className="Button" onClick={handleButtonClick}>
                            פתיחת חלון
                        </button>
                        <Popup className="popupPage"
                            closeOnDocumentClick={false}
                            open={showPopup}
                            onClose={changeClicked}
                            position="center center"
                        >
                            <MadorPage changeClicked={changeClicked} />
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

