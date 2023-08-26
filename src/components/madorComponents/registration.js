import { React, useState, useRef, useEffect } from "react";

function Registration() {
    const [firstName, setFirstName] = useState('');
    const [num, setNum] = useState('');
    const [userName, setUserName] = useState('');
    const [gender, setGender] = useState('');
    const buttonRef = useRef(null)
    const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?!.*\d{4,})(?=^(?:\D*\d){0,3}\D*$)[a-zA-Z\d]*$/;
    const numRegex = /^[0-9]+$/;


    useEffect(() => {
        console.log(typeof num)
        if (usernameRegex.test(userName) && firstName.length && numRegex.test(num) && num.length === 7) {
            buttonRef.current.style.background = "blue"
        }
        else {
            buttonRef.current.style.background = "#dadada"
        }

    }, [firstName, num, userName])

    function handleSubmit(e) {
        e.preventDefault();

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
                    <select>
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
        </div>
    )
}

export default Registration;