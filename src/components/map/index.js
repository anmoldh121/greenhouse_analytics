import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

export default function Map(props) {
  return (
    //The code to render a map goes here.
    <div data-tip="" className="map">
      <ComposableMap>
        <Geographies fill="#D6D6DA" geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              /*props.graphData[geo.properties.NAME] && */ <Geography
                stroke="grey"
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME, POP_EST } = geo.properties;
                  props.setContent(`${NAME}`);
                }}
                onMouseLeave={() => {
                  props.setContent('');
                }}
                style={{
                  hover: {
                    fill: '#63C5DA',
                    outline: 'none',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
