import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';
import Counter from "./counter"
import Text from "./text"
function App() {
  const [name, setName]=useState("")
  const handleChange=(event)=>{
    setName(event.target.value);
  };
  return (
    <div>
      <h1 className='text-center text-primary'>Simple React App</h1>
      <Text val={name}/>
      <Counter/>
      <div className='text-center'>
      <input type="text" onChange={handleChange}/>

      </div>
    </div>
  );
}

export default App;
