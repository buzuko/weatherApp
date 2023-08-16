import { React, useState, useEffect } from "react";
import axios from "axios"

function LogIn() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, setIsPending] = useState(true)

    const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?!.*\d{4,})(?=^(?:\D*\d){0,3}\D*$)[a-zA-Z\d]*$/;
    console.log("here 5" + isPending)
    function handleSubmit(e) {
        e.preventDefault();
        if (!usernameRegex.test(userName)) {
            fetchData(password, userName)
        } else {
            setIsPending(false)
            alert("password is incorrect!");

        }
    }

    // בדיקה ראשונית האם המשתמש שמור במערכת
    useEffect(() => {
        localStorage.getItem("password") ? fetchData(localStorage.getItem("password"), localStorage.getItem("userName")) : setIsPending(false)
    }, [])

    // בדיקה האם המשתמש שהוזן נכון
    const fetchData = async (Password, UserName) => {
        setIsPending(true)
        try {
            const res = await axios.post("http://localhost:3001/login", null, {
                headers: {
                    user_mispar_ishi: Password,
                    user_name: UserName
                }
            })
            console.log(res)
            localStorage.setItem("userName", UserName)
            localStorage.setItem("password", Password)
            setIsPending(false)
        } catch (error) {
            setIsPending(false)
            alert("password is incorrect!") // באג: האלרט לא נסגר לפני שפנדיג מתעדכן
        }
    }

    return (
        <div className="LogIn">
            {!isPending ?
                <form onSubmit={handleSubmit}>
                    <label for="user">:שם משתמש</label>
                    <br />
                    <input
                        type="text"
                        id="user"
                        required
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value)
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
                            setPassword(e.target.value)
                        }}
                    />
                    <br />
                    <button>היכנס</button>
                </form> :
                <h1>...Loading</h1>
            }
        </div>
    )
}
export default LogIn;