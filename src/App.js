import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './components/map';
import Sidebar from './components/sidebar';
import ReactTooltip from 'react-tooltip';
import BarGraph from './components/barGraph';

function App() {
  const [content, setContent] = useState('');
  const [contries, setContries] = useState([]);
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    fetch('data.json')
      .then(response => {
        return response.json();
      })
      .then(response => {
        let greenhouseData = {};
        response.forEach(el => {
          if (greenhouseData[el.country_or_area]) {
            if (greenhouseData[el.country_or_area][el.category]) {
              greenhouseData[el.country_or_area][el.category].push(el);
            } else {
              greenhouseData[el.country_or_area][el.category] = [];
            }
          } else {
            greenhouseData[el.country_or_area] = {};
          }
        });

        setGraphData(greenhouseData);
        console.log(greenhouseData);
        let keys = Object.keys(greenhouseData);
        setContries(keys);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Sidebar graphData={graphData} contries={contries} />
      <Map setContent={setContent} content={content} graphData={graphData} />
      <ReactTooltip>
        {content !== '' && (
          <div>
            {content}
            <BarGraph graphData={graphData} content={content} />
          </div>
        )}
      </ReactTooltip>
    </div>
  );
}

export default App;
