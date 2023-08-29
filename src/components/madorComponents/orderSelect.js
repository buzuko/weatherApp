import React, { useState, useRef, useEffect } from 'react';
import Popup from 'reactjs-popup'
import dropDownIcon from "../../addOns/dropDownIcon.png"


function CustomDropdown({ options, setSelectedOption }) {
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [index2, setIndex2] = useState(0)

    const cityRef = useRef(null);
    const locationRef = useRef(null);
    const genderRef = useRef(null);
    const roleRef = useRef(null);
    const popupRef = useRef(null)
    const allRefs = [cityRef, locationRef, genderRef, roleRef]

    function clicked() {
        if (allRefs[3].current) {
            allRefs[3].current.style.background = 'blue';
        }
    }
    // מעדכן איזה אופציה נבחר
    function handleOptionSelect(option, index) {
        setIndex2(index)
        setSelectedOption2(option);
        setSelectedOption(option);
        if (popupRef.current) {
            popupRef.current.close();
        }
        console.log(index)

    };

    // useEffect(() => {
    //     console.log(allRefs)
    //     if (allRefs[index2].current) {
    //         allRefs[index2].current.style.background = 'blue';
    //     }
    // }, [index2])

    // מדגיש את האופציה שהעכבר מעליה
    function handleOptionHover(index) {
        if (allRefs[index].current && index !== index2) {
            allRefs[index].current.style.fontWeight = 'bold';
            allRefs[index].current.style.background = '#e4e4e4';
            //allRefs[index].current.style.color = '#000';
        }
    }
    // לא מדגיש את האופציה שהעכבר מעליה
    function handleOptionStopHover(index) {
        if (allRefs[index].current && index !== index2) {
            allRefs[index].current.style.fontWeight = 'normal';
            allRefs[index].current.style.background = '';
            allRefs[index].current.style.color = '#525252';
        }
    }
    function changeClicked() {
        // setSelectedOption(null)
        // setSelectedOption2(null)
        // setIndex2(0)
    }

    return (
        <Popup
            trigger={<button className="dropdown-button"> <div className="dropdownContent" >
                <img src={dropDownIcon} className="dropDownIcon" alt="dropDownIcon" />
                <p className='dropdownText'>{selectedOption2 ? selectedOption2.name : "עיר"}</p>
            </div></button>}
            position="bottom center"
            closeOnDocument Click={true}
            ref={popupRef}
            contentStyle={{ padding: '0', border: 'none' }}
        >
            <div className="dropdown-content">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`dropdown-option ${index === index2 ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect(option, index)}
                        onMouseEnter={() => handleOptionHover(index)}
                        onMouseLeave={() => handleOptionStopHover(index)}
                        ref={allRefs[index]}
                    >
                        {option.name}

                        {/* {index !== 4 && <div className='Separator'></div>} */}
                    </div>

                ))}
                {clicked}

            </div>
        </Popup>
    );
}

export default CustomDropdown;
