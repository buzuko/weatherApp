import { React, useState, useRef, useEffect, useContext } from "react";
import { AppContext } from "../../addOns/AppProvider";
import sort from "../../addOns/sertingCards";

function Registration({ incrementCounter }) {
    const [firstName, setFirstName] = useState('');
    const [num, setNum] = useState('');
    const [userName, setUserName] = useState('');
    const [gender, setGender] = useState('ז');
    const buttonRef = useRef(null)
    const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?!.*\d{4,})(?=^(?:\D*\d){0,3}\D*$)[a-zA-Z\d]*$/;
    const numRegex = /^[0-9]+$/;
    const { soldiersData, setSoldiersData, setIsChanged, setIsSaved } = useContext(AppContext);
    const [soldier, setSoldier] = useState(null);

    //const [selectedOption, setSelectedOption] = useState({ name: "עיר", info: "City" });
    //const cards = sort(selectedOption)

    //console.log(a)


    useEffect(() => {
        if (usernameRegex.test(userName) && firstName.length && numRegex.test(num) && num.length === 7) {
            buttonRef.current.style.background = "blue"
            buttonRef.current.disabled = false;
        }
        else {
            buttonRef.current.style.background = "#c3c3c3"
            buttonRef.current.disabled = true;
        }

    }, [firstName, num, userName])

    function handleSubmit(e) {
        e.preventDefault();
        const name = firstName.split(' ', 2);
        const soldier2 = {
            "Mispar_Ishi": num,
            "User_Name": userName,
            "First_Name": name[0] ?? "",
            "Last_Name": name[1] ?? "",
            "Gender": gender,
            "Role": "מפתח תוכנה",
            "Rank": "סמל",
            "City": "זכרון יעקב",
            "City_Location": "צפון",
            "Is_Officer": false,
            "Age": 19
        }

        const newArray = [...soldiersData, soldier2]
        setSoldiersData(newArray)
        setIsSaved(false)
        setIsChanged(true)
    }
    return (
        <div className="Registration">
            <form className="form" onSubmit={handleSubmit}>
                <div className="enter">
                    <input
                        type="text"
                        required
                        placeholder="שם החייל"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <div className="regLine"></div>
                    <input
                        type="text"
                        required
                        placeholder="מספר אישי"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                    />
                    <div className="regLine"></div>
                    <input
                        type="text"
                        required
                        placeholder="שם משתמש"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <div className="regLine"></div>
                    <select onChange={(e) => {
                        const selected = (e.target.value);
                        setGender(selected);
                    }}>
                        <option key={1} value={"ז"}>
                            זכר
                        </option>

                        <option key={2} value={"נ"}>
                            נקבה
                        </option>
                        <option key={3} value={"א"} >
                            אחר
                        </option>
                    </select>
                </div>
                <button className="send" ref={buttonRef}><span>
                    הוספה
                </span></button>

            </form>
            {/* <button onClick={try}></button> */}
        </div >
    )
}

export default Registration;