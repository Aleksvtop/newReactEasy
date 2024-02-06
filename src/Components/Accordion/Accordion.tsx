import React from "react";

export const Accordion = () => {
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    )
}

const AccordionTitle = () => {
    return (
        <h3>Menu</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}