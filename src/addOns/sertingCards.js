import { React, useContext } from "react";
import SoldierCard from "../components/madorComponents/soldierCard";
import { AppContext } from "./AppProvider";

export default function Sort(category) {
    const { soldiersData } = useContext(AppContext);

    const categories = [];
    const cards = [];

    // מכניס את כל החיילים למיקום שלהם
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


    // מחזיר את כל הכרטיסים
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

// ממיין את הכרטיסים לפי השם בכל קטגוריה
function sortCards(item) {
    function compareHebrewNames(a, b) {
        const nameA = a.props.item.First_Name + a.props.item.Last_Name;
        const nameB = b.props.item.First_Name + b.props.item.Last_Name;
        return nameA.localeCompare(nameB, undefined, { sensitivity: 'base' });
    }

    item.data.sort(compareHebrewNames);

}

