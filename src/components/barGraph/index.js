import React, { useEffect, useState } from 'react';
import { Chart } from 'react-charts';

const BarGraph = props => {
  const [plot, setPlot] = useState([]);
  useEffect(() => {
    if (props.content !== '') {
      let countryData = props.graphData[props.content]
        ? props.graphData[props.content]
            .carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent
        : undefined;
      if (countryData !== undefined) {
        let temp = [];
        countryData.forEach(el => {
          temp.push([el.year, Number(el.value)]);
        });
        setPlot(temp);
      }
    }
  }, [props.graphData, props.content]);

  const data = React.useMemo(
    () => [
      {
        label: props.content,
        data: plot,
      },
    ],
    [plot]
  );
  const series = React.useMemo(() => ({
    type: 'bar',
  }));

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'left' },
      { type: 'linear', position: 'bottom', stacked: true },
    ],
    []
  );
  return (
    <div>
      <div
        style={{
          width: '400px',
          height: '300px',
        }}
        className="chart"
      >
        <Chart data={data} series={series} axes={axes} tooltip />
      </div>
    </div>
  );
};

export default BarGraph;
