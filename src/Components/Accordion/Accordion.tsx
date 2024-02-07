import React from "react";

type AccordionType = {
    title: string
    collapsed: boolean
}

type AccordionTitleType = {
    value: string
}

export const Accordion = (props: AccordionType) => {
    if (props.collapsed) {
        return (
            <>
                <AccordionTitle value={props.title}/>
            </>)
    } else {
        return (
            <>
                <AccordionTitle value={props.title}/>
                {props.collapsed}
                <AccordionBody/>
            </>)
    }
}

const AccordionTitle = (props: AccordionTitleType) => {
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