import React from 'react';
import Router from './Router';
import { useSelector } from 'react-redux';
import { Header } from './Components/header/index';
import { CopyRight } from './Components/common/index';

import './assets/css/style.css';

function App() {
  const selector = useSelector((state) => state);
  console.log(selector);

  return (
    <>
      <Header />
      <main className="App">
        <Router />
      </main>
      <CopyRight />
    </>
  );
}

export default App;
