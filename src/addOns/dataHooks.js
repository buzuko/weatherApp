// import { useState, useEffect, useContext } from "react";
// import axios from "axios"
// import { AppContext } from "../addOns/AppProvider";


// // מביא את המידע מהסרבר
// export function useAllCities(URL, bool) {
//     const [isPending2, setIsPending2] = useState(true)
//     const [data, setData] = useState(null)
//     const { current, setWeatherData, setIsPending, setCity, setError, setLocalStorageNum } = useContext(AppContext);
//     const stored = localStorage.getItem("weatherData")
//     useEffect(() => {
//         if (bool && current) {
//             setWeatherData(current)
//             setData(current)
//             setIsPending2(false)
//             // setIsPending(false)
//         } else {

// <<<<<<< HEAD
//             bool ? setIsPending(true) : setIsPending2(true)
//             const timerId = setTimeout(async () => {

//                 try {
//                     const res = await axios(`http://localhost:3001/${URL}`, {
//                         headers: {
//                             user_mispar_ishi: localStorage.getItem("password"),
//                             user_name: localStorage.getItem("userName"),
// =======
//             try {
//                 const res = await axios(`http://localhost:3001/${URL}`, {
//                     headers: {
//                         user_mispar_ishi: localStorage.getItem("password"),
//                         user_name: localStorage.getItem("userName"),
//                     }
//                 })
//                 setData(res.data);
//                 bool && setCity(URL.split("/")[1])
//                 setIsPending2(false)
//                 if (bool) {
//                     async function fetchData() {
//                         try {
//                             const res2 = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.latitude}&lon=${res.data.longitude}&appid=6f11fa9760902e1597265ad205f05d2c`);
//                             setWeatherData(res2.data)
//                             varifySearched(res2.data)
//                             setIsPending(false)
//                         } catch (error) {
//                             setIsPending(false)
//                             setError(error.message);
// >>>>>>> mission-10
//                         }
//                     })
//                     !bool && localStorage.setItem("allCountry", JSON.stringify(res.data))
//                     setData(res.data);
//                     bool && setCity(URL.split("/")[1])

//                     if (bool) {
//                         async function fetchData() {
//                             try {
//                                 const res2 = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.latitude}&lon=${res.data.longitude}&appid=6f11fa9760902e1597265ad205f05d2c`);
//                                 setWeatherData(res2.data)
//                                 varifySearched2(res2.data)
//                                 varifySearched(URL, true)

//                                 setLocalStorageNum(JSON.parse(localStorage.getItem('lastSearches')).length)
//                                 setIsPending(false)
//                             } catch (error) {
//                                 setError(error.message);
//                             }
//                         }
//                         fetchData();
//                     }
//                 } catch (error) {
//                     setError(error.message);
//                     bool ? setIsPending(false) : setIsPending2(false)
//                 }
//             }, 100);
//             return () => {
//                 clearTimeout(timerId);
//             }
// <<<<<<< HEAD
// =======
//         }, 1000);
//         return () => {
//             clearTimeout(timerId);
// >>>>>>> mission-10
//         }
//     }, [URL]);
// <<<<<<< HEAD
//     return { data };

// =======
//     return { data, isPending2 };
// >>>>>>> mission-10
// }

// // שומר את המקומות האחרונים
// function varifySearched(URL) {
//     const storedCityString = JSON.parse(localStorage.getItem('allCountry'));
//     const storedArrayString = localStorage.getItem('lastSearches');
//     const lastSearches = storedArrayString ? JSON.parse(storedArrayString) : [];

//     let i = -1
//     let i2 = -1
//     storedCityString.map((element, index) => {
//         if (element.city === URL.split("/")[1]) {
//             i2 = index
//             lastSearches[0] && lastSearches.map((element, index) => {
//                 if (element.city === URL.split("/")[1])
//                     i = index
//             })
//         }
//     })

//     i !== -1 && lastSearches.splice(i, 1);

//     if (lastSearches.length < process.env.REACT_APP_MAX) {
//         lastSearches.push(storedCityString[i2]);
//         localStorage.setItem('lastSearches', JSON.stringify(lastSearches));
//     }
//     else {
//         lastSearches.shift();
//         lastSearches.push(storedCityString[i2]);
//         localStorage.setItem("lastSearches", JSON.stringify(lastSearches))
//     }
// }

// function varifySearched2(res) {
//     const storedArrayString = localStorage.getItem('weatherData');
//     const lastSearches = storedArrayString ? JSON.parse(storedArrayString) : [];

//     let i = -1
//     lastSearches.length && lastSearches.map((element, index) => {
//         if (element.lat === res.lat && element.lon === res.lon) {
//             i = index
//         }
//     })
//     i !== -1 && lastSearches.splice(i, 1);



//     if (lastSearches.length < process.env.REACT_APP_MAX) {
//         lastSearches.push(res);
//         localStorage.setItem('weatherData', JSON.stringify(lastSearches));

//     }
//     else {
//         lastSearches.shift();
//         lastSearches.push(res);
//         localStorage.setItem("weatherData", JSON.stringify(lastSearches))
//     }

// }
