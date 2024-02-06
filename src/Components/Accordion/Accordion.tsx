import React from "react";

export const Accordion = (props: any) => {
    return (
        <>
            <AccordionTitle value = {props.title}/>
            <AccordionBody/>
        </>
    )
}

const AccordionTitle = (props: any) => {
    return (
        <h3>{props.value}</h3>
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