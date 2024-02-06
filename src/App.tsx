import React from 'react';

import './App.css';

//import { Accordion } from './Components/Accordion';

function App() {
    return (
        <div>
            <Rating/>
            <Accordion/>
        </div>
    );
}

const Rating = () => {
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

const Star = () => {
    return (
        <>
            <div>star</div>
        </>
    )
}

const Accordion = () => {
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

export default App;
