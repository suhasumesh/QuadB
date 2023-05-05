import './App.css';
import NavBar from './Components/NavBar';
import React,{useEffect, useState} from 'react'
import Tabledata from './Components/Tabledata';

function App() {
  const [mode, setMode] = useState('light'); 
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    async function fetchTickers() {
      const response = await fetch('http://localhost:5000/api/v2');
      const data = await response.json();
      const tickersData = Object.entries(data).map(([key, value]) => ({ 
        base_unit:value.base_unit,
        nameid: key,
        lastPrice: value.last,
        highPrice: value.high,
        lowPrice: value.low,
        volume: value.volume,
        open:value.open,
        sell:value.sell,
        buy:value.buy,
        name:value.name
      })).slice(0,10);
      try {
        await fetch('http://localhost:5000/api/tickers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(tickersData),
          // body: JSON.stringify({base_unit,name,lastPrice,highPrice,lowPrice,volume}),
        });
        setTickers(tickersData);
        console.log(tickersData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTickers();
  }, []);

// THIS CAN ALSO BE USED TO SAVE THE DATA WHEN CLICKED ON THE SAVE BUTTON:
  // const handleSaveTickers = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/tickers', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(tickers)
  //     });
  //     if (response.ok) {
  //       console.log('Tickers saved successfully');
  //     } else {
  //       console.error('Failed to save tickers');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#253644';
      document.title = 'HODLINFO-DarkMode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.title = 'HODLINFO-LightMode';
    }
  }
  return (
    <div>
      {/* <NavBar title="HODLINFO" mode={mode} toggleMode={toggleMode} data={tickers} save={handleSaveTickers}/> */}
      <NavBar title="HODLINFO" mode={mode} toggleMode={toggleMode} data={tickers}/>
      <Tabledata data={tickers} mode={mode} />
    </div>
  );
}

export default App;
