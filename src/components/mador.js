import { React, useContext, useState } from "react";
import MadorPage from "./madorComponents/madorPage";
import './mador.css';
import { useAllCities } from "../addOns/dataHooks";
import { AppContext } from "../addOns/AppProvider";
import Popup from 'reactjs-popup'



function Mador() {
    const { error, setSoldiersData } = useContext(AppContext);
    const [isClick, setIsClick] = useState(false)

    const { data, isPending2 } = useAllCities("getAllSoldiers", false)





    return (
        <div className="Mador" >
            {!isPending2 ?
                !error ?
                    <>
                        {!isClick ?
                            <button className="Button" onClick={() => {
                                setSoldiersData(data)
                                setIsClick(!isClick)
                            }}>פתיחת חלון</button>
                            :
                            <>
                                <MadorPage />
                            </>
                        }
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

{/* <Popup trigger={<button className="Button">פתיחת חלון</button>}
position="center center"
closeOnDocumentClick={false}>
<MadorPage />

</Popup> */}