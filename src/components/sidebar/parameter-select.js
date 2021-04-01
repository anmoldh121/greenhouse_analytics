import React from 'react'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown'

export default function ParameterSelect({ parameters, onSelect }) {
    //Write logic to render all countries as dropdown options

    console.log(parameters);
    const options = [
        'Parameter One', 'Parameter Two', 'Parameter Three'
    ];
    const defaultOption = parameters[0];

    return(
        <div className="parameter-select">
            <Dropdown options={parameters} onChange={onSelect} value={defaultOption} placeholder="Select an option" />
        </div>
    )
}