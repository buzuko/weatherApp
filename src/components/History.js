import { React, useContext, useState } from "react";
//import { Bar } from 'react-chartjs-2';
import '../App.css';
//import 'chart.js/auto';
import TablePart from "./tablePart";
import { AppContext } from "../addOns/AppProvider";

function History() {
    const { data } = useContext(AppContext);
    const [a, setA] = useState(0)


    return (
        <div className="history">
            <TablePart />
            <table>
                <thead>
                    <tr>
                        <th>פעולות</th>
                        <th>יבשת</th>
                        <th>מדינה</th>
                        <th className="city">עיר</th>
                    </tr>

                </thead>
                <tbody>
                    <TablePart num={0} setA={setA} />
                    <TablePart num={1} setA={setA} />
                    <TablePart num={2} setA={setA} />
                    <TablePart num={3} setA={setA} />
                    <TablePart num={4} setA={setA} />
                </tbody>
            </table>

        </div>
    )
}

export default History;