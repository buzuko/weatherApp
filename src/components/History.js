import { React, useContext, useState } from "react";
import '../App.css';
import TablePart from "./tablePart";

function History() {
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