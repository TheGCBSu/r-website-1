import React, { useState} from 'react';

function App({val}) {

  return(
    <div><h1 className='text-primary text-center'>Welcome, {val ? val:"Guest"}!</h1></div>
);
}

export default App;