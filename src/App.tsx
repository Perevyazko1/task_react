import React from 'react';

import Weather from "./components/Weather";
import YandexMap from "./components/Yandexmap";



function App() {

  return (

    <div className="App">
      <Weather/>
      <YandexMap/>
        {/*<Map location={undefined}/>*/}
    </div>
  );
}

export default App;
