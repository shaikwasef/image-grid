import React from 'react';
import './App.css';
import ImageContainer from './components/ImageContainer';
import SearchBox from "./components/SearchBox"

function App() {  
  return (
    <div className="App">
      <SearchBox />
      <ImageContainer/>
    </div>
  );
}

export default App;
