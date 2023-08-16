import { React, useState } from "react";

function LogIn() {
    const [userName, SetUserName] = useState("");
    const [password, SetPassword] = useState("");

    const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?!.*\d{4,})(?=^(?:\D*\d){0,3}\D*$)[a-zA-Z\d]*$/;

    function handleSubmit(e) {
        e.preventDefault();
        usernameRegex.test(userName) ? console.log("succsses") : alert("password is incorect!")
    }
    return (
        <div className="LogIn">
            <form onSubmit={handleSubmit}>
                <label for="user">:שם משתמש</label>
                <br />
                <input
                    type="text"
                    id="user"
                    required
                    value={userName}
                    onChange={(e) => {
                        SetUserName(e.target.value)
                    }}
                />
                <br />
                <label for="pass">:מספר אישי</label>
                <br />
                <input
                    type="password"

                    id="pass"
                    required
                    value={password}
                    onChange={(e) => {
                        SetPassword(e.target.value)
                    }}
                />
                <br />
                <button>היכנס</button>
            </form>
        </div>
    )
}
export default LogIn;