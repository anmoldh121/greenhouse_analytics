import React, { useEffect, useState } from 'react';
import Graph from './graph';
import CountrySelect from './country-select';
import ParameterSelect from './parameter-select';

export default function Sidebar({ contries, graphData }) {
  const [parameter, setParameter] = useState([]);
  const [selectedContry, setSelectedContry] = useState([]);
  const [selectedParameter, setSelectedParameter] = useState();

  useEffect(() => {
    if (contries[0] !== undefined && selectedContry.length == 0) {
      setSelectedContry([contries[0]]);
    }
  }, [contries]);

  useEffect(() => {
    if (selectedContry.length && contries.length) {
      let keys = Object.keys(graphData[contries[0]]);
      setParameter(keys);
    }
  }, [selectedContry]);

  useEffect(() => {
    if (contries.length) {
      setSelectedParameter(parameter[0]);
    }
  }, [parameter]);

  const onSelect = event => {
    console.log(event);
    setSelectedContry([event.value]);
  };

  const onParameterSelect = event => {
    setSelectedParameter(event.value);
  };

  return (
    <div className="sidebar">
      <div className="dropdowns">
        <CountrySelect
          contries={contries}
          onSelect={onSelect}
          selectedContry={selectedContry}
        />
        <ParameterSelect parameters={parameter} onSelect={onParameterSelect} />
      </div>
      <Graph
        data={graphData}
        selectedContry={selectedContry}
        selectedParameter={selectedParameter}
      />
    </div>
  );
}
