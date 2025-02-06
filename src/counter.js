import React, { useState} from 'react';

function App() {
  const [count, setCount]=useState(0);
  function calc(val){
    if(val===1){
      setCount(count+1);
    } else if(val===0){
      setCount(count-1);
    }
  }
  return (
    <div className='container'>
      <h1 className='text-primary text-center'>Counter: {count}</h1>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-4 col-mb-4'>
        <button onClick={()=>calc(1)} className='w-100'>Add</button>
        </div>
        <div className='col-4 col-mb-4'>
        <button onClick={()=>calc(0)} className='w-100'>Subtract</button>
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  );
}

export default App;
