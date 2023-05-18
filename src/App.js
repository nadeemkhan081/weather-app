import { useState } from 'react';
import './App.css';


const api = {
  key: "223c12d734c5fe675d8c0d0d3683ed22",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {

  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});
  const searchPressed = () => {
    // console.log("searchPressed");
    // console.log(search)

    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Open Weather API</h1>
       <div>

       <input type='text' placeholder='Enter the city name...' onChange={(e)=>setSearch(e.target.value)} />

       <button onClick={searchPressed}>Search</button>
       </div>


      
       <p>{weather.name}</p>
       <p>{weather.main.temp} °C</p>
       <p>{weather.weather[0].description}</p>
      
      </header>
    </div>
  );
}

export default App;
