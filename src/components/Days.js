import React, { useState, useEffect } from "react";
import "../styles/Days.css";
import dayComponents from './dayComponents';
// import Day1 from "./dayComponents/Day1";
// import Day2 from "./dayComponents/Day2";
// import Day3 from "./dayComponents/Day3";
// import Day4 from "./dayComponents/Day4";
// import Day5 from "./dayComponents/Day5";
// import Day6 from "./dayComponents/Day6";
// import Day7 from "./dayComponents/Day7";

const itemsPerPage = 10;

export default function Days() {
    const [currentPage, setCurrentPage] = useState(0);
    const [components, setComponents] = useState([]);

    useEffect(() => {
        const importComponents = async () => {
            const importedComponents = await Promise.all(
                dayComponents.map(({ component, title }) => {
                    return import (`./dayComponents/${component}`).then(comp => ({
                        component: comp.default,
                        title
                    }));
                })
            );
            setComponents(importedComponents);
        };

        importComponents();
    }, []);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = components.slice(startIndex, endIndex);

    return (
        <>
            <h2 className="days-title">Days</h2>
            <div className="page-container">
                <div className="grid-wrapper">
                    {currentItems.map(({ component: DayComponent, title }, index) => {
                        <div key={index} className="grid-rows">
                            <div className="grid-blocks">
                                <h3 className="day-heading">{title}</h3>
                                <DayComponent />
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
        // <>
        //     <h2 className="days-title">Days</h2>
        //     <div className="page-container">
        //         <div className="grid-wrapper">
        //             <div className="grid-rows">
        //                 <div className="grid-blocks">
        //                     <h3 className="day-heading">Day 1</h3>
        //                     <Day1 />
        //                 </div>
        //                 <div className="grid-blocks">
        //                     <h3 className="day-heading">Day 2</h3>
        //                     <Day2 />
        //                 </div>
        //             </div>
                    
        //             <div className="grid-rows">
        //                 <div className="grid-blocks">
        //                     <h3 className="day-heading">Day 3</h3>
        //                     <Day3 />
        //                 </div>
        //                 <div className="grid-blocks">
        //                     <h3 className="day-heading">Day 4</h3>
        //                     <Day4 />
        //                 </div>
        //             </div>

        //             <div className="grid-rows">
        //                 <div className="grid-blocks">
        //                     <h3 className="day-heading">Day 5</h3>
        //                     <Day5 />
        //                 </div>
        //                 <div className="grid-blocks">
        //                     <h3 className="day-heading">Day 6</h3>
        //                     <Day6 />
        //                 </div>
        //             </div>

        //             <div className="grid-rows">
        //                 <div className="grid-blocks">
        //                     <h3 className="day-heading">Day 7</h3>
        //                     <Day7 />
        //                 </div>
        //                 <div className="grid-blocks">
        //                     <h3 className="day-heading">Day 8</h3>
        //                     {/* <Day8 /> */}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}