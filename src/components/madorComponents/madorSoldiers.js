import { React, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../addOns/AppProvider";
import sort from "../../addOns/sertingCards";
import axios from "axios";
import OrderSelect from "./orderSelect";


function MadorSoldiers({ changeClicked, changeIsClosed }) {
    const { soldiersData, setSoldiersData, setSelected, selected, isChanged, setIsChanged, setIsSaved, setIsPending, setNewSoldiersData } = useContext(AppContext);

    const [selectedOption, setSelectedOption] = useState({ name: "עיר", info: "City" });
    const [A, setA] = useState()
    const cards = sort(selectedOption)
    const saveRef = useRef(null)
    const seletAllRef = useRef(null)
    const CleenAllRef = useRef(null)
    const deleteSelectedRef = useRef(null)

    let newArray = []

    const options = [
        { name: "עיר", info: "City" },
        { name: "מיקום עיר בארץ", info: "City_Location" },
        { name: "מין", info: "Gender" },
        { name: "תפקיד + דרגה", info: ["Role", "Rank"] }
    ];


    useEffect(() => {
        setA(x => x + 1)
    }, [selectedOption, soldiersData])
    useEffect(() => {
        selected && selected.length ? deleteSelectedRef.current.disabled = false : deleteSelectedRef.current.disabled = true

    }, [selected])
    useEffect(() => {
        isChanged ? saveRef.current.disabled = false : saveRef.current.disabled = true
    }, [isChanged])

    function selectAll() {
        const newArray = [...soldiersData]
        setSelected(newArray)
    }

    // מוחק את החיילים שנבחרו
    function deleteSelected() {
        soldiersData.forEach(element => {
            if (selected) {
                if (!selected.includes(element)) {
                    newArray.push(element)
                    setIsChanged(true)
                }
            } else {
                newArray = [...soldiersData]
            }

            setSoldiersData(newArray)
        });
        setSelected([])
    }

    // שומר את כל החיילים שעדיין בקומפוננטה
    async function save() {
        setIsPending(true)
        try {
            const res = await axios.put(`http://localhost:3001/updateMadorSoldiers`, { newSoldiers: soldiersData }, {
                headers: {
                    user_mispar_ishi: "8649932",
                    user_name: "Idan445"
                }

            })
            setIsSaved(true)
            setNewSoldiersData(soldiersData)
            setIsPending(false)
            changeClicked()
        } catch (error) {
            setIsPending(false)
            console.log(error)
            alert(error)
        }
    }


    return (
        <div className="MadorSoldiers">
            <div className="selection">
                <span className="orderBy">
                    :סדר לפי
                </span>
                <OrderSelect options={options} setSelectedOption={setSelectedOption} changeIsClosed={changeIsClosed} />
            </div>
            <div className="selectCard">
                {cards}
            </div>
            <button className="save" ref={saveRef} onClick={save} ><span>
                שמירה
            </span></button>
            <button className="save" ref={seletAllRef} onClick={selectAll} ><span>
                בחר הכול
            </span></button>
            <button className="save" ref={CleenAllRef} onClick={() => setSelected([])} ><span>
                נקה הכול
            </span></button>
            <button className="save" ref={deleteSelectedRef} onClick={deleteSelected} ><span>
                מחיקת מסומנים
            </span></button>
        </div>
    )
}

export default MadorSoldiers;