import React from 'react';

import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";



function App() {
    return (
        <div>
            <Rating value = {1}/>
            <Accordion title={'Menu'}/>
            <Accordion title={'Users'}/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
        </div>
    );
}





export default App;
