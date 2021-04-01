import React from 'react';
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';

export default function CountrySelect({ contries, onSelect, selectedContry }) {
  //Write logic to render all countries as dropdown options
  const options = ['Country One', 'Country Two', 'Country Three'];

  const defaultOption = contries[0];

  return (
    <div className="country-select">
      <Dropdown
        options={contries}
        value={defaultOption}
        onChange={onSelect}
        placeholder="Select an option"
      />
    </div>
  );
}
