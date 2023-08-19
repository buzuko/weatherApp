import { React, useState, useEffect, useContext } from "react";
import axios from "axios"
//import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../addOns/AppProvider";
//import { useLogin } from "../addOns/dataHooks";

export function useAllCities(URL, bool) {
    const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const { weatherData, setWeatherData } = useContext(AppContext);
    useEffect(() => {
        const timerId = setTimeout(async () => {
            setIsPending(true);
            try {
                const res = await axios(`http://localhost:3001/${URL}`, {
                    headers: {
                        user_mispar_ishi: localStorage.getItem("password"),
                        user_name: localStorage.getItem("userName"),
                    }
                })

                setIsPending(false);
                setData(res.data);
                //bool && setWeatherData(res.data)
            } catch (error) {
                setError(error.response);
                setIsPending(false);
            }
        }, 1000);
        return () => {
            clearTimeout(timerId);
        }

    }, []); // לברר האם צריך לנקות את האפקט
    return { data, error };
}
// export function useAllCities2() {
//     const [isPending, setIsPending] = useState(true)
//     const [data, setData] = useState(null)
//     const [error, setError] = useState(null)
//     useEffect(() => {
//         setTimeout(() => {
//             async function fetchthis() {
//                 setIsPending(true);
//                 try {
//                     const res = await axios(`http://localhost:3001/cities/Hargeisa`, {
//                         headers: {
//                             user_mispar_ishi: localStorage.getItem("password"),
//                             user_name: localStorage.getItem("userName"),
//                         }
//                         // params: {
//                         //     cityName: "Hargeisa"
//                         // }
//                     }
//                     );
//                     console.log(res)
//                     setIsPending(false);
//                     setData(res.data);
//                 } catch (error) {
//                     setError(error.response);
//                     setIsPending(false);
//                 }
//             }

//             fetchthis();
//         }, 1000);
//     }, []); // לברר האם צריך לנקות את האפקט
//     return { data, isPending, error };
// }

// export const useLogin = async (Password, UserName) => {
//     const [isPending, setIsPending] = useState(true)
//     const { data, setData } = useContext(AppContext);
//     try {
//         const res = await axios.post("http://localhost:3001/login", null, {
//             headers: {
//                 user_mispar_ishi: Password,
//                 user_name: UserName
//             }
//         })
//         console.log(res)
//         localStorage.setItem("userName", UserName)
//         localStorage.setItem("password", Password)
//         setIsPending(false)
//         setData(res.data)
//         history.push("/WeatherPage");

//     } catch (error) {
//         setIsPending(false)
//         alert("password is incorrect!") // באג: האלרט לא נסגר לפני שפנדיג מתעדכן
//     }
//     return isPending;

// }

