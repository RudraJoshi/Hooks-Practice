import React from 'react';
import './App.css';

import Counter from './Components/Chapter01/Counter'
import CounterTwo from './Components/Chapter02/CounterTwo'
import CounterThree from './Components/Chapter03/CounterThree'
import CounterFour from './Components/Chapter04/CounterFour'
import CounterFive from './Components/Chapter05/CounterFive'
import Countersix from './Components/Chapter06/Countersix';
import CounterSeven from './Components/Chapter07/CounterSeven';
import CounterEight from './Components/Chapter08/CounterEight';

function App() {
  return (
    <div className="App">
      <CounterEight/>
      <CounterSeven/>
      <Countersix/>
      <CounterFive/>
      <CounterFour/>
      <CounterThree/>
      <CounterTwo/>
      <Counter/>
    </div>
  );
}

export default App;
