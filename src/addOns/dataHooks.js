import { React, useState, useEffect, useContext } from "react";
import axios from "axios"
//import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../addOns/AppProvider";
//import { useLogin } from "../addOns/dataHooks";

export function useAllCities(URL, bool) {
    const [isPending2, setIsPending2] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const { weatherData, setWeatherData, isPending, setIsPending, setCity } = useContext(AppContext);

    useEffect(() => {
        bool ? setIsPending(true) : setIsPending2(true)
        const timerId = setTimeout(async () => {

            try {
                const res = await axios(`http://localhost:3001/${URL}`, {
                    headers: {
                        user_mispar_ishi: localStorage.getItem("password"),
                        user_name: localStorage.getItem("userName"),
                    }
                })
                setData(res.data);
                bool && setCity(URL.split("/")[1])

                if (bool) {
                    async function fetchData() {

                        try {
                            const res2 = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.latitude}&lon=${res.data.longitude}&appid=6f11fa9760902e1597265ad205f05d2c`);
                            setWeatherData(res2.data)
                            bool ? setIsPending(false) : setIsPending2(false)
                        } catch (error) {
                            console.log(error);
                        }
                    }

                    fetchData();
                }
            } catch (error) {
                setError(error.response);
                bool ? setIsPending(false) : setIsPending2(false)
            }
        }, 1000);
        return () => {
            clearTimeout(timerId);
        }

    }, [URL]); // לברר האם צריך לנקות את האפקט
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

