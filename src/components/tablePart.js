import React, { useState, useContext } from "react";
//import { Bar } from 'react-chartjs-2';
import { Link } from "react-router-dom";
import '../App.css';
//import 'chart.js/auto';
import { AppContext } from "../addOns/AppProvider";


function TablePart({ num, setA }) {
    const data = localStorage.getItem("lastSearches")
    const data2 = localStorage.getItem("weatherData")

    const { setLocalStorageNum, setCurrent } = useContext(AppContext);

    if (data && JSON.parse(data)[num]) {
        const city = JSON.parse(data)[num].city
        const country = JSON.parse(data)[num].country
        const continent = JSON.parse(data)[num].continent

        function deleteLast() {
            const JSONData = JSON.parse(data);
            const JSONData2 = JSON.parse(data2);

            JSONData.splice(num, 1);
            JSONData2.splice(num, 1);

            localStorage.setItem("lastSearches", JSON.stringify(JSONData))
            localStorage.setItem("weatherData", JSON.stringify(JSONData2))
            setA(d => d + 1)
            setLocalStorageNum(a => a + 1)
        }
        function makeFirst() {
            const storedArrayString = JSON.parse(data);
            const storedArrayString2 = JSON.parse(data2);
            setCurrent(storedArrayString2[num])
            storedArrayString.push(storedArrayString[num]);
            storedArrayString2.push(storedArrayString2[num]);

            storedArrayString.splice(num, 1);
            storedArrayString2.splice(num, 1);

            localStorage.setItem('lastSearches', JSON.stringify(storedArrayString));
            localStorage.setItem('weatherData', JSON.stringify(storedArrayString2));

        }

        return (

            <tr>
                <td className="opptions">
                    <button onClick={deleteLast} >מחיקה מההיסטוריה</button> {" | "}
                    {JSON.parse(data).length === num + 1 ? <button >ביטול בחירה</button> : <Link to={'/WeatherPage'} onClick={makeFirst}>הפוך לראשי</Link>}
                </td>
                <td>{continent}</td>
                <td>{country}</td>
                <td>{city}</td>
            </tr>
        )
    }
    else return

}

export default TablePart;