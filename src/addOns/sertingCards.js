import { React, useContext } from "react";
import SoldierCard from "../components/madorComponents/soldierCard";
import { AppContext } from "./AppProvider";

export default function Sort(category) {
    const { soldiersData } = useContext(AppContext);

    const categories = [];
    const cards = [];

    soldiersData.forEach((item) => {
        let categoryIdentifier;

        if (category.name === "תפקיד + דרגה") {
            categoryIdentifier = `${item[category.info[0]]}-${item[category.info[1]]}`;

        } else {
            categoryIdentifier = item[category.info];
        }

        if (!categories.includes(categoryIdentifier)) {
            categories.push(categoryIdentifier);
            cards.push({
                categoryIdentifier: categoryIdentifier,
                data: []
            });
        }

        let matchingCard;
        if (category.name === "תפקיד + דרגה") {
            matchingCard = cards.find((card) => (card.categoryIdentifier.split('-')[0] === categoryIdentifier.split('-')[0] && card.categoryIdentifier.split('-')[1] === categoryIdentifier.split('-')[1]));
        } else {
            matchingCard = cards.find((card) => card.categoryIdentifier === categoryIdentifier);

        }
        matchingCard.data.push(<SoldierCard key={item.id} item={item} />);
    });


    const dataToReturn = cards.map((item) => {
        const name = item.categoryIdentifier === "ז" ? "זכר" : item.categoryIdentifier === "נ" ? "נקבה" : item.categoryIdentifier;
        const arrToSort = []
        sortCards(item)
        return (
            <div className={item.categoryIdentifier} key={item.categoryIdentifier}>
                <h1>{category.name === "תפקיד + דרגה" ? name.split('-').join(', ') + ` (${item.data.length})` : name + ` (${item.data.length})`}</h1>
                <div className="sortedCardsData">{item.data}</div>
            </div>
        );
    });

    return dataToReturn;
}

function sortCards(item) {
    function compareHebrewNames(a, b) {
        const nameA = a.props.item.First_Name + a.props.item.Last_Name;
        const nameB = b.props.item.First_Name + b.props.item.Last_Name;
        return nameA.localeCompare(nameB, undefined, { sensitivity: 'base' });
    }

    item.data.sort(compareHebrewNames);

}



// function sortCards(data) {
//     const [sortedData, setSortedData] = useState(data);

//     const sortByCategory = (category) => {
//         const sorted = [...sortedData].sort((a, b) => {
//             return a[category].localeCompare(b[category]);
//         });
//         setSortedData(sorted);
//     };
// }

// export default function Sort(category) {
//     const { soldiersData } = useContext(AppContext);

//     const difCat = []

//     let cards = [
//     ]

//     soldiersData.map((item) => {
//         if (category.name === "תפקיד + דרגה") {
//             if (!difCat.includes(item[category.info[0]]) && !difCat.includes(item[category.info[1]])) {
//                 // console.log(item[category.info[0]])
//                 // console.log(item[category.info[1]])
//                 // console.log(difCat)
//                 difCat.push([item[category.info[0]], item[category.info[1]]])
//                 cards.push({
//                     categoryName: [item[category.info[0]], item[category.info[1]]],
//                     data: []
//                 })
//             }

//         } else {
//             if (!difCat.includes(item[category.info])) {
//                 console.log(item[category.info])
//                 difCat.push(item[category.info])
//                 cards.push({
//                     categoryName: item[category.info],
//                     data: []
//                 })
//             }
//         }

//     })
//     if (category.name === "תפקיד + דרגה") {
//         soldiersData.map((item) => {
//             cards.map((item2, index) => {
//                 if (item[category.info[0]] === cards[index].categoryName[0] && item[category.info[1]] === cards[index].categoryName[1]) {
//                     (cards[index].data).push(<SoldierCard
//                         key={item.id}
//                         item={item}
//                     />)
//                 }
//             })
//         })

//     } else {
//         soldiersData.map((item) => {
//             cards.map((item2, index) => {
//                 if (item[category.info] === cards[index].categoryName) {
//                     (cards[index].data).push(<SoldierCard
//                         key={item.id}
//                         item={item}
//                     />)
//                 }
//             })
//         })
//     }
//     const dataToReturn = cards.map(item => {
//         const name = item.categoryName === "ז" ? "זכר" : item.categoryName === "נ" ? "נקבה" : item.categoryName
//         return (
//             <div className={item.categoryName} >
//                 <h1>{category.name === "תפקיד + דרגה" ? name[0] + ", " + name[1] + ` (${item.data.length})` : name + ` (${item.data.length})`}</h1>
//                 <div className="sortedCardsData" >{item.data}</div>
//             </div>
//         )
//     })
//     return (dataToReturn)

// }

// function sortInBox() {

// }