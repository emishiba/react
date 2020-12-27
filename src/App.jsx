import React from 'react';
import { useSelector } from 'react-redux';
import { Top } from './templates/index';

function App() {
  const selector = useSelector((state) => state);
  console.log(selector);

  return (
    <div className="App">
      <Top />
    </div>
  );
}

export default App;
