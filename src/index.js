import React from 'react';
import ReactDOM from 'react-dom';
import {Comp1, Comp2} from './route';

ReactDOM.render(
    <div>
        <Comp1></Comp1>
        <Comp2></Comp2>
    </div>,
    document.querySelector('#app')
)