import React from 'react';
import Router from './Router';
import { Header } from './Components/header/index';
import { CopyRight } from './Components/common/index';
import './assets/css/style.css';

function App() {
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
