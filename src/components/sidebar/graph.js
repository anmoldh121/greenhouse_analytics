import React, { useEffect, useState } from 'react';
import { Chart } from 'react-charts';

export default function Graph(props) {
  const [plot, setPlot] = useState([]);

  useEffect(() => {
    if (
      Object.keys(props.data).length &&
      props.selectedContry.length &&
      props.selectedParameter
    ) {
      let data = [];
      props.selectedContry.forEach(contry => {
        let temp = [];
        let dataToPlot = props.data[contry][props.selectedParameter];
        dataToPlot.forEach(el => {
          temp.push([new Date(el.year), Number(el.value)]);
        });
        data.push({
          label: contry,
          data: temp,
        });
      });
      setPlot(data);
    }
  }, [props.data, props.selectedContry, props.selectedParameter]);

  const data = React.useMemo(() => plot, [plot]);

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <div
      style={{
        width: '500px',
        height: '400px',
      }}
      className="chart"
    >
      <Chart data={data} axes={axes} tooltip />
    </div>
  );
}
